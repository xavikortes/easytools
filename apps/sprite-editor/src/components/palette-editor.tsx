import { useState } from 'react'
import styles from './palette-editor.module.css'

import { ColorPalette } from '../consts/types'
import { initialPaletteList } from '../consts/data'
import { DbName, Strings } from '../consts/enums'

import { readDb, writeDb } from '../lib/db'

import Palette from './palette'
import Button from './button'
import PaletteEditorTools from './palette-editor-tools'


type PaletteEditorProps = {
  isPaletteActive: (palette: ColorPalette) => boolean,
  onChangePalette: (palette: ColorPalette) => void
}

const PaletteEditor = ({ isPaletteActive, onChangePalette }: PaletteEditorProps) => {
  const [paletteList, setPaletteList] = useState(readDb(DbName.PaletteList) ?? initialPaletteList)

  const addNewPalette = () => {
    const newPaletteList = { 
      ...paletteList,
      [Strings.NewPaletteName]: { name: Strings.NewPaletteName, colors: Object.values(paletteList).pop().colors }
    }

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(newPaletteList[Strings.NewPaletteName])
  }

  const editPaletteName = (palette: ColorPalette, newName: string) => {
    const palettes = Object.values(paletteList)
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newPaletteList = [
      ...palettes.slice(0, paletteIndex),
      { ...palette, name: newName },
      ...palettes.slice(paletteIndex + 1)
    ].reduce((accum, item) => ({ ...accum, [item.name]: item }), {})

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(newPaletteList[newName])
  }

  const deletePalette = (palette: ColorPalette) => {
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)
    const nextSelected = Object.values(paletteList)[!!paletteIndex ? paletteIndex - 1 : paletteIndex + 1]

    let newPaletteList = {
      ...Object.values(paletteList)
        .filter(item => item.name !== palette.name)
        .reduce((accum, item) => ({ ...accum, [item.name]: item }), {})
    }

    if (!Object.keys(newPaletteList).length) {
      return
    }

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(nextSelected)
  }

  const copyPalette = (palette: ColorPalette) => {
    const newName = `${palette.name} - ${Strings.CopiedPaletteName}`
    const palettes = Object.values(paletteList)
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newPaletteList = [
      ...palettes.slice(0, paletteIndex),
      palette,
      { name: newName, colors: [ ...palette.colors ] },
      ...palettes.slice(paletteIndex + 1)
    ].reduce((accum, item) => ({ ...accum, [item.name]: item }), {})

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(newPaletteList[newName])
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
                    type="radio"
                    className={ styles.paletteListItemRadio }
                    name="fav_language"
                    value={ palette.name }
                    checked={ isPaletteActive(palette) }
                    onClick={ () => onChangePalette(palette) }
                    onChange={ () => { /* Error fix */ } }
                  />
                  <Palette
                    palette={ palette }
                    onNameChange={ newName => editPaletteName(palette, newName) }
                  />
                </div>
                {
                  isPaletteActive(palette) &&
                  <PaletteEditorTools
                    onDeletePalette={ () => deletePalette(palette) }
                    onCopyPalette={ () => copyPalette(palette) } />
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
