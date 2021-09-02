import { useState } from 'react'

import { Types, Data, DbName, Strings } from '@easytools/consts'
import { readDb, writeDb } from '@easytools/lib'
import { Palette, Button } from '@easytools/components'

import PaletteEditorTools from './palette-editor-tools'

import styles from './palette-editor.module.css'


const getPaletteList = () => (readDb(DbName.PaletteList) ?? Data.initialPaletteList) as Types.PaletteList

type PaletteEditorProps = {
  isPaletteActive: (palette: Types.ColorPalette) => boolean,
  onChangePalette: (palette: Types.ColorPalette) => void
}

const PaletteEditor = ({ isPaletteActive, onChangePalette }: PaletteEditorProps) => {
  const [paletteList, setPaletteList] = useState<Types.PaletteList>(getPaletteList)
  const [selectedColor, setSelectedColor] = useState<Types.Color>()

  const changePalette = (palette: Types.ColorPalette) => {
    setSelectedColor(undefined)
    onChangePalette(palette)
  }

  const addNewPalette = () => {
    const newPaletteList: Types.PaletteList = { 
      ...paletteList,
      [Strings.NewPaletteName]: { name: Strings.NewPaletteName, colors: Object.values(paletteList).pop()!.colors }
    }

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    changePalette(newPaletteList[Strings.NewPaletteName])
  }

  const editPaletteName = (palette: Types.ColorPalette, newName: string) => {
    const palettes = Object.values(paletteList)
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newPaletteList: Types.PaletteList = [
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
