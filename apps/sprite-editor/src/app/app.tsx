import { useState } from 'react'
import styles from './app.module.css';

import { Sprite, SpriteSheet, ColorPalette } from './types'
import { AppScreen, SpriteEditorMode } from './enums'
import { SPRITESHEET_WIDTH, SPRITESHEET_HEIGHT, SPRITE_SIZE } from './config'
import { paletteList } from './data';

import Menu from './components/menu'
import PaletteEditor from './components/palette-editor'
import Canvas from './components/canvas'
import SpriteEditorTools from './components/sprite-editor-tools'
import Palette from './components/palette'


type SpriteEditorProps = {
  palette: ColorPalette,
  spritesheet: SpriteSheet,
  setSpritesheet: (spritesheet: SpriteSheet) => void,
  selectedSprite: number
}

const SpriteEditor = ({ palette, spritesheet, setSpritesheet, selectedSprite }: SpriteEditorProps) => {
  const [mode, setMode] = useState(SpriteEditorMode.Paint)
  const [selectedColor, setSelectedColor] = useState(palette.colors[0])

  const setSprite = (sprite: Sprite) => {
    setSpritesheet([
      ...spritesheet.slice(0, selectedSprite),
      sprite,
      ...spritesheet.slice(selectedSprite + 1)
    ])
  }

  return (
    <div className={ styles.spriteEditor }>
      <span className={ styles.spriteTitle }>
        { `#${(selectedSprite + 1).toString().padStart(3, '0')}` }
      </span>
      <Canvas
        sprite={ spritesheet[selectedSprite] }
        setSprite={ setSprite }
        selectedColor={ selectedColor }
      />
      <SpriteEditorTools
        isModeActive={ toolMode => toolMode === mode }
        onModeClicked={ toolMode => setMode(toolMode) }
        spriteNumber={ selectedSprite }
        sprite={ spritesheet[selectedSprite] }
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
              sprite.map((pixel, pixelIdx) =>
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
    .map(() =>
      new Array(SPRITE_SIZE * SPRITE_SIZE)
      .fill(null)
    )
}

export function App() {
  const [spritesheet, setSpritesheet] = useState(createSpritesheet)
  const [selectedSprite, setSelectedSprite] = useState(0)
  const [screen, setScreen] = useState(AppScreen.Sprite)
  const [currentPalette, setCurrentPalette] = useState(Object.values(paletteList)[0])

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
              spritesheet={ spritesheet }
              setSpritesheet={ setSpritesheet }
              selectedSprite={ selectedSprite }
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