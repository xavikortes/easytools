import { useState } from 'react'
import styles from './app.module.css';

import { Block, Sheet, ColorPalette, SpriteEditorMode } from './types'
import { SHEET_WIDTH, SHEET_HEIGHT, BLOCK_SIZE, INITIAL_COLOR } from './config'
import { paletteList } from './data';

import Menu from './components/menu'
import Canvas from './components/canvas'
import SpriteEditorTools from './components/sprite-editor-tools'
import Palette from './components/palette'


// TODO
// Edicion de Colores
// Herramientas de sheet
// Ver rendimiento de sheet (cargar pngs en lugar de pixels?)
// Separar comps (lo mas eficaz posible)
// Spritesheet solo debe ser un canvas, que se pinta de otra manera
// Cursores en general pixelados + pointer + colorpicker en palette?
// Type Sheet -> SpriteSheet
// SpriteEditorMode -> AppMode?

// paletas, herramientas y comportamientos  (https://apps.lospec.com/pixel-editor)


type PaletteEditorProps = {
  isPaletteActive: (palette: ColorPalette) => boolean,
  onChangePalette: (palette: ColorPalette) => void
}

const PaletteEditor = ({ isPaletteActive, onChangePalette }: PaletteEditorProps) => {
  return (
    <div className={ styles.paletteEditor }>
      <ul className={ styles.paletteList }>
        {
          Object.values(paletteList).map((palette, idx) =>
            <li
              key={ idx }
              className={ styles.paletteListItem }>
                <input
                  type="radio"
                  className={ styles.paletteListItemRadio }
                  name="fav_language"
                  value={ palette.name }
                  checked={ isPaletteActive(palette) }
                  onClick={ () => onChangePalette(palette) }
                  onChange={ () => { /* Error fix */} }
                />
                <Palette
                  palette={ palette }
                />
            </li>
          )
        }
      </ul>
    </div>
  )
}


type SpriteEditorProps = {
  palette: ColorPalette,
  sheet: Sheet,
  setSheet: (sheet: Sheet) => void,
  selectedBlock: number
}

const SpriteEditor = ({ palette, sheet, setSheet, selectedBlock }: SpriteEditorProps) => {
  const [selectedColor, setSelectedColor] = useState(INITIAL_COLOR)

  const setBlock = (block: Block) => {
    setSheet([
      ...sheet.slice(0, selectedBlock),
      block,
      ...sheet.slice(selectedBlock + 1)
    ])
  }

  return (
    <div className={ styles.spriteEditor }>
      <span className={ styles.blockTitle }>
        { `#${(selectedBlock + 1).toString().padStart(3, '0')}` }
      </span>
      <Canvas
        block={ sheet[selectedBlock] }
        setBlock={ setBlock }
        selectedColor={ selectedColor }
      />
      <SpriteEditorTools
        block={ sheet[selectedBlock] }
      />
      <Palette
        palette={ palette }
        isColorActive={ color => color.toString() === selectedColor.toString() }
        onColorClicked={ color => setSelectedColor(color) }
      />
    </div>
  )
}

type SpriteSheetProps = {
  sheet: Sheet,
  selectedBlock: number,
  setSelectedBlock: (block: number) => void
}

const SpriteSheet = ({ sheet, selectedBlock, setSelectedBlock }: SpriteSheetProps) => {
  return (
    <ul className={ styles.spritesheet }>
      {
        sheet.map((block, idx) =>
          <ul
            key={ idx }
            className={ `${styles.block} ${selectedBlock === idx ? styles.selected: ''}` }
            onClick={ () => setSelectedBlock(idx) }
            style={{
              width: `calc(100% / ${SHEET_WIDTH})`,
              paddingBottom: `calc(100% / ${SHEET_WIDTH})`
            }}
          >
            {
              block.map((pixel, pixelIdx) =>
                <li
                  key={ pixelIdx }
                  className={ styles.pixel }
                  style={{
                    width: `calc(100% / ${BLOCK_SIZE})`,
                    paddingBottom: `calc(100% / ${BLOCK_SIZE})`,
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
  sheet: Sheet,
  selectedBlock: number,
  setSelectedBlock: (block: number) => void
}

const SpriteSheetEditor = ({ sheet, selectedBlock, setSelectedBlock }: SpriteSheetEditorProps) => {
  return (
    <div className={ styles.spriteSheetEditor }>
      <SpriteSheet
        sheet={ sheet }
        selectedBlock={ selectedBlock }
        setSelectedBlock={ setSelectedBlock }
      />
    </div>
  )
}

type ContainerProps = {
  children: any | any[]
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  )
}

const createSheet = () => {
  return new Array(SHEET_WIDTH * SHEET_HEIGHT)
    .fill(null)
    .map(() =>
      new Array(BLOCK_SIZE * BLOCK_SIZE)
      .fill(null)
    )
}

export function App() {
  const [sheet, setSheet] = useState(createSheet)
  const [selectedBlock, setSelectedBlock] = useState(0)
  const [mode, setMode] = useState('sprite' as SpriteEditorMode)
  const [currentPalette, setCurrentPalette] = useState(Object.values(paletteList)[0])

  return (
    <Container>
      <div className={ styles.wrapper }>
        <Menu
          isModeActive={ menuMode => menuMode === mode }
          onModeClicked={ menuMode => setMode(menuMode) }
        />
        <div className={ styles.app }>
          {
            mode === 'palette' &&
            <PaletteEditor
              isPaletteActive={ palette => Object.values(palette).toString() === Object.values(currentPalette).toString() }
              onChangePalette={ palette => setCurrentPalette(palette) }
            />
          }
          {
            mode === 'sprite' &&
            <SpriteEditor
              palette={ currentPalette }
              sheet={ sheet }
              setSheet={ setSheet }
              selectedBlock={ selectedBlock }
            />
          }
          {
            mode === 'spritesheet' &&
            <SpriteSheetEditor
              sheet={ sheet }
              selectedBlock={ selectedBlock }
              setSelectedBlock={ setSelectedBlock }
            />
          }
        </div>
      </div>
    </Container>
  );
}

export default App;
