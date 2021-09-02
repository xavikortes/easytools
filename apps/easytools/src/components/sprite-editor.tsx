import { useState } from 'react'

import { Types, Numbers, SpriteEditorMode } from '@easytools/consts'

import { Canvas, Palette } from '@easytools/components'
import SpriteEditorTools from '../components/sprite-editor-tools'

import styles from './sprite-editor.module.css'


const findNeighbours = (idx: number) => {
  const neighbours = []

  const row = Math.floor(idx / Numbers.SpriteSize)

  row > 0 && neighbours.push(idx - Numbers.SpriteSize)
  Math.floor((idx - 1) / Numbers.SpriteSize) === row && neighbours.push(idx - 1)
  Math.floor((idx + 1) / Numbers.SpriteSize) === row && neighbours.push(idx + 1)
  row < Numbers.SpriteSize - 1 && neighbours.push(idx + Numbers.SpriteSize)

  return neighbours
}

type SpriteEditorProps = {
  palette: Types.ColorPalette,
  sprite: Types.Sprite,
  setSprite: (sprite: Types.Sprite) => void
}

const SpriteEditor = ({ palette, sprite, setSprite }: SpriteEditorProps) => {
  const [mode, setMode] = useState<SpriteEditorMode>(SpriteEditorMode.Paint)
  const [selectedColor, setSelectedColor] = useState<Types.Color>(palette.colors[0])
  
  const setPixel = (pixel: number, color: Types.Pixel) => {
    setSprite({
      ...sprite,
      pixels: [
        ...sprite.pixels.slice(0, pixel),
        color ?? null,
        ...sprite.pixels.slice(pixel + 1)
      ]
    })
  }

  const fill = (idx: number, localSprite: Types.Sprite) => {
    if (sprite.pixels[idx] === selectedColor) {
      return localSprite
    }

    let newSprite = {
      ...localSprite,
      pixels: [
        ...localSprite.pixels.slice(0, idx),
        selectedColor ?? null,
        ...localSprite.pixels.slice(idx + 1)
      ]
    }
  
    findNeighbours(idx)
      .filter(neighbour => sprite.pixels[idx] === newSprite.pixels[neighbour])
      .forEach(neighbour => {
        newSprite = fill(neighbour, newSprite)
      })

    return newSprite
  }

  const canvasHandleClick = {
    [SpriteEditorMode.Paint.toString()]:
      (idx: number) => setPixel(idx, selectedColor),
    [SpriteEditorMode.Erase.toString()]:
      (idx: number) => setPixel(idx, null),
    [SpriteEditorMode.Pick.toString()]:
      (idx: number) => {
        sprite.pixels[idx] && setSelectedColor(sprite.pixels[idx]!)
        sprite.pixels[idx] && setMode(SpriteEditorMode.Paint)
      },
    [SpriteEditorMode.Fill.toString()]:
      (idx: number) => {
        const newSprite = fill(idx, sprite)
        setSprite(newSprite)
      }
  }

  const paintCanvasItem = (idx: number) => {
    const item = sprite.pixels[idx]
    return item && !!item.length ? `rgba(${item[0]}, ${item[1]}, ${item[2]}, ${item[3]})` : 'transparent'
  }

  const changeColor = (color: Types.Color) => {
    mode === SpriteEditorMode.Erase && setMode(SpriteEditorMode.Paint)
    setSelectedColor(color)
  }

  return (
    <div className={ styles.spriteEditor }>
      <span className={ styles.spriteTitle }>
        { `#${(sprite.number + 1).toString().padStart(3, '0')}` }
      </span>
      <Canvas
        width={ Numbers.SpriteSize }
        height={ Numbers.SpriteSize }
        handleClick={ idx => canvasHandleClick[mode](idx) }
        paintItem={ idx => paintCanvasItem(idx) }
        isDragActive={ () => [SpriteEditorMode.Paint, SpriteEditorMode.Erase].includes(mode) }
      />
      <SpriteEditorTools
        isModeActive={ toolMode => toolMode === mode }
        onModeClicked={ toolMode => setMode(toolMode) }
        sprite={ sprite }
        setSprite={ setSprite }
      />
      <Palette
        palette={ palette }
        isColorActive={ color => color.toString() === selectedColor.toString() }
        onColorClicked={ color => changeColor(color) }
      />
    </div>
  )
}

export default SpriteEditor
