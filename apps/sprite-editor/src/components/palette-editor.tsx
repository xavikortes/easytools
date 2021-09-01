import { useState } from 'react'
import styles from './palette-editor.module.css'

import { Color, ColorPalette, PaletteList } from '../consts/types'
import { initialPaletteList } from '../consts/data'
import { DbName, Strings } from '../consts/enums'

import { readDb, writeDb } from '../lib/db'

import Palette from './palette'
import Button from './button'
import PaletteEditorTools from './palette-editor-tools'


const getPaletteList = () => (readDb(DbName.PaletteList) ?? initialPaletteList) as PaletteList

type PaletteEditorProps = {
  isPaletteActive: (palette: ColorPalette) => boolean,
  onChangePalette: (palette: ColorPalette) => void
}

const PaletteEditor = ({ isPaletteActive, onChangePalette }: PaletteEditorProps) => {
  const [paletteList, setPaletteList] = useState<PaletteList>(getPaletteList)
  const [selectedColor, setSelectedColor] = useState<Color>()

  const changePalette = (palette: ColorPalette) => {
    setSelectedColor(undefined)
    onChangePalette(palette)
  }

  const addNewPalette = () => {
    const newPaletteList: PaletteList = { 
      ...paletteList,
      [Strings.NewPaletteName]: { name: Strings.NewPaletteName, colors: Object.values(paletteList).pop()!.colors }
    }

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    changePalette(newPaletteList[Strings.NewPaletteName])
  }

  const editPaletteName = (palette: ColorPalette, newName: string) => {
    const palettes = Object.values(paletteList)
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newPaletteList: PaletteList = [
      ...palettes.slice(0, paletteIndex),
      { ...palette, name: newName },
      ...palettes.slice(paletteIndex + 1)
    ].reduce((accum, item) => ({ ...accum, [item.name]: item }), {})

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    changePalette(newPaletteList[newName])
  }

  return (
    <div className={ styles.paletteEditor }>
      <ul className={ styles.paletteList }>
        {
          Object.values(paletteList).map((palette, idx) =>
            <li
              key={ idx }
              className={ styles.paletteListItem }>
                <div className={ styles.paletteListItemContent }>
                  <input
                    type='radio'
                    className={ styles.paletteListItemRadio }
                    name='activePalette'
                    value={ palette.name }
                    checked={ isPaletteActive(palette) }
                    onClick={ () => changePalette(palette) }
                    onChange={ () => { /* Error fix */ } }
                  />
                  <Palette
                    palette={ palette }
                    isColorActive={ color => color === selectedColor }
                    onColorClicked={ color => isPaletteActive(palette) && setSelectedColor(color) }
                    onNameChange={ newName => editPaletteName(palette, newName) }
                  />
                </div>
                {
                  isPaletteActive(palette) &&
                  <PaletteEditorTools
                    palette={ palette }
                    paletteList={ paletteList }
                    setPaletteList={ setPaletteList }
                    currentColor={ selectedColor }
                    setCurrentColor={ setSelectedColor }
                    onChangePalette={ changePalette } />
                }
            </li>
          )
        }
        <Button
          className={ styles.newPaletteButton }
          text={ Strings.NewPaletteButton }
          onClick={ () => addNewPalette() } />
      </ul>
    </div>
  )
}

export default PaletteEditor
