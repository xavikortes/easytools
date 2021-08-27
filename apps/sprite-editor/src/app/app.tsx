import { useState } from 'react'
import styles from './app.module.css';

import { Sprite, SpriteSheet, ColorPalette, Pixel } from '../consts/types'
import { AppScreen, SpriteEditorMode } from '../consts/enums'
import { SPRITESHEET_WIDTH, SPRITESHEET_HEIGHT, SPRITE_SIZE } from '../consts/config'
import { paletteList } from '../consts/data';

import Menu from '../components/menu'
import PaletteEditor from '../components/palette-editor'
import Canvas from '../components/canvas'
import SpriteEditorTools from '../components/sprite-editor-tools'
import Palette from '../components/palette'


const findNeighbours = (idx: number) => {
  const neighbours = []

  const row = Math.floor(idx / SPRITE_SIZE)

  row > 0 && neighbours.push(idx - SPRITE_SIZE)
  Math.floor((idx - 1) / SPRITE_SIZE) === row && neighbours.push(idx - 1)
  Math.floor((idx + 1) / SPRITE_SIZE) === row && neighbours.push(idx + 1)
  row < SPRITE_SIZE - 1 && neighbours.push(idx + SPRITE_SIZE)

  return neighbours
}

type SpriteEditorProps = {
  palette: ColorPalette,
  sprite: Sprite,
  setSprite: (sprite: Sprite) => void
}

const SpriteEditor = ({ palette, sprite, setSprite }: SpriteEditorProps) => {
  const [mode, setMode] = useState(SpriteEditorMode.Paint)
  const [selectedColor, setSelectedColor] = useState(palette.colors[0])
  
  const setPixel = (pixel: number, color: Pixel) => {
    setSprite({
      ...sprite,
      pixels: [
        ...sprite.pixels.slice(0, pixel),
        color ?? null,
        ...sprite.pixels.slice(pixel + 1)
      ]
    })
  }

  const fill = (idx: number, localSprite: Sprite) => {
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

  return (
    <div className={ styles.spriteEditor }>
      <span className={ styles.spriteTitle }>
        { `#${(sprite.number + 1).toString().padStart(3, '0')}` }
      </span>
      <Canvas
        width={ SPRITE_SIZE }
        height={ SPRITE_SIZE }
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
        onColorClicked={ color => setSelectedColor(color) }
      />
    </div>
  )
}

type SpriteSheetTmpProps = {
  spritesheet: SpriteSheet,
  selectedSprite: number,
  setSelectedSprite: (sprite: number) => void
}

const SpriteSheetTmp = ({ spritesheet, selectedSprite, setSelectedSprite }: SpriteSheetTmpProps) => {
  return (
    <ul className={ styles.spritesheet }>
      {
        spritesheet.map((sprite, idx) =>
          <ul
            key={ idx }
            className={ `${styles.sprite} ${selectedSprite === idx ? styles.selected: ''}` }
            onClick={ () => setSelectedSprite(idx) }
            style={{
              width: `calc(100% / ${SPRITESHEET_WIDTH})`,
              paddingBottom: `calc(100% / ${SPRITESHEET_WIDTH})`
            }}
          >
            {
              sprite.pixels.map((pixel, pixelIdx) =>
                <li
                  key={ pixelIdx }
                  className={ styles.pixel }
                  style={{
                    width: `calc(100% / ${SPRITE_SIZE})`,
                    paddingBottom: `calc(100% / ${SPRITE_SIZE})`,
                    backgroundColor: pixel ? `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})` : 'transparent'
                  }}
                />
              )
            }
          </ul>
        )
      }
    </ul>
  )
}

type SpriteSheetEditorProps = {
  spritesheet: SpriteSheet,
  selectedSprite: number,
  setSelectedSprite: (sprite: number) => void
}

const SpriteSheetEditor = ({ spritesheet, selectedSprite, setSelectedSprite }: SpriteSheetEditorProps) => {
  return (
    <div className={ styles.spriteSheetEditor }>
      <SpriteSheetTmp
        spritesheet={ spritesheet }
        selectedSprite={ selectedSprite }
        setSelectedSprite={ setSelectedSprite }
      />
    </div>
  )
}

const createSpritesheet = () => {
  return new Array(SPRITESHEET_WIDTH * SPRITESHEET_HEIGHT)
    .fill(null)
    .map((_item, idx) =>
      ({
        number: idx,
        pixels: new Array(SPRITE_SIZE * SPRITE_SIZE)
        .fill(null)
      })
    )
}

export function App() {
  const [spritesheet, setSpritesheet] = useState(createSpritesheet)
  const [selectedSprite, setSelectedSprite] = useState(0)
  const [screen, setScreen] = useState(AppScreen.Sprite)
  const [currentPalette, setCurrentPalette] = useState(Object.values(paletteList)[0])

  const setSprite = (sprite: Sprite) => {
    setSpritesheet([
      ...spritesheet.slice(0, selectedSprite),
      sprite,
      ...spritesheet.slice(selectedSprite + 1)
    ])
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper }>
        <Menu
          isScreenActive={ tag => tag === screen }
          onScreenTagClicked={ tag => setScreen(tag) }
        />
        <div className={ styles.app }>
          {
            screen === AppScreen.Palette &&
            <PaletteEditor
              isPaletteActive={ palette => Object.values(palette).toString() === Object.values(currentPalette).toString() }
              onChangePalette={ palette => setCurrentPalette(palette) }
            />
          }
          {
            screen === AppScreen.Sprite &&
            <SpriteEditor
              palette={ currentPalette }
              sprite={ spritesheet[selectedSprite] }
              setSprite={ setSprite }
            />
          }
          {
            screen === AppScreen.Spritesheet &&
            <SpriteSheetEditor
              spritesheet={ spritesheet }
              selectedSprite={ selectedSprite }
              setSelectedSprite={ setSelectedSprite }
            />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
