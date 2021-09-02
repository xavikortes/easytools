import { useState } from 'react'

import { Types, AppScreen, Numbers, Data } from '@easytools/consts'

import Menu from '../components/menu'
import PaletteEditor from '../components/palette-editor'
import SpriteEditor from '../components/sprite-editor'

import styles from './app.module.css'


type SpriteSheetTmpProps = {
  spriteSheet: Types.SpriteSheet,
  selectedSprite: number,
  setSelectedSprite: (sprite: number) => void
}

const SpriteSheetTmp = ({ spriteSheet, selectedSprite, setSelectedSprite }: SpriteSheetTmpProps) => {
  return (
    <ul className={ styles.spriteSheet }>
      {
        spriteSheet.map((sprite, idx) =>
          <ul
            key={ idx }
            className={ `${styles.sprite} ${selectedSprite === idx ? styles.selected: ''}` }
            onClick={ () => setSelectedSprite(idx) }
            style={{
              width: `calc(100% / ${Numbers.SpriteSheetWidth})`,
              paddingBottom: `calc(100% / ${Numbers.SpriteSheetWidth})`
            }}
          >
            {
              sprite.pixels.map((pixel, pixelIdx) =>
                <li
                  key={ pixelIdx }
                  className={ styles.pixel }
                  style={{
                    width: `calc(100% / ${Numbers.SpriteSize})`,
                    paddingBottom: `calc(100% / ${Numbers.SpriteSize})`,
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
  spriteSheet: Types.SpriteSheet,
  selectedSprite: number,
  setSelectedSprite: (sprite: number) => void
}

const SpriteSheetEditor = ({ spriteSheet, selectedSprite, setSelectedSprite }: SpriteSheetEditorProps) => {
  return (
    <div className={ styles.spriteSheetEditor }>
      <SpriteSheetTmp
        spriteSheet={ spriteSheet }
        selectedSprite={ selectedSprite }
        setSelectedSprite={ setSelectedSprite }
      />
    </div>
  )
}

const createSpritesheet = () => {
  return new Array(Numbers.SpriteSheetWidth * Numbers.SpriteSheetHeight)
    .fill(null)
    .map((_item, idx) =>
      ({
        number: idx,
        pixels: new Array(Numbers.SpriteSize * Numbers.SpriteSize)
        .fill(null)
      })
    )
}

export function App() {
  const [spriteSheet, setSpritesheet] = useState<Types.SpriteSheet>(createSpritesheet)
  const [selectedSprite, setSelectedSprite] = useState<number>(0)
  const [screen, setScreen] = useState<AppScreen>(AppScreen.Sprite)
  const [currentPalette, setCurrentPalette] = useState<Types.ColorPalette>(Object.values(Data.initialPaletteList)[0])

  const setSprite = (sprite: Types.Sprite) => {
    setSpritesheet([
      ...spriteSheet.slice(0, selectedSprite),
      sprite,
      ...spriteSheet.slice(selectedSprite + 1)
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
              isPaletteActive={ palette => palette.name === currentPalette.name }
              onChangePalette={ palette => setCurrentPalette(palette) }
            />
          }
          {
            screen === AppScreen.Sprite &&
            <SpriteEditor
              palette={ currentPalette }
              sprite={ spriteSheet[selectedSprite] }
              setSprite={ setSprite }
            />
          }
          {
            screen === AppScreen.SpriteSheet &&
            <SpriteSheetEditor
              spriteSheet={ spriteSheet }
              selectedSprite={ selectedSprite }
              setSelectedSprite={ setSelectedSprite }
            />
          }
        </div>
      </div>
    </div>
  )
}

export default App
