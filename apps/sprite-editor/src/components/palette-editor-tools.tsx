import styles from './palette-editor-tools.module.css'

import { ColorPalette, PaletteList } from '../consts/types'
import { writeDb } from '../lib/db'
import { DbName, Strings } from '../consts/enums'


type PaletteEditorToolsProps = {
  palette: ColorPalette,
  paletteList: PaletteList,
  setPaletteList: (paletteList: PaletteList) => void,
  onChangePalette: (palette: ColorPalette) => void
}

const PaletteEditorTools = ({ palette, paletteList, setPaletteList, onChangePalette }: PaletteEditorToolsProps) => {
  const onDeletePalette = () => {
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)
    const nextSelected = Object.values(paletteList)[!!paletteIndex ? paletteIndex - 1 : paletteIndex + 1]

    let newPaletteList: PaletteList = {
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

  const onCopyPalette = () => {
    const newName = `${palette.name} - ${Strings.CopiedPaletteName}`
    const palettes = Object.values(paletteList)
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newPaletteList: PaletteList = [
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
    <>
      <div className={ styles.paletteEditorTools }>
        <button
          className={ styles.toolButton }
          onClick={ () => onDeletePalette() }
        >
          <img src='assets/trash.png' className={ styles.toolButtonImg }/>
        </button>
        <button
          className={ styles.toolButton }
          onClick={ () => onCopyPalette() }
        >
          <img src='assets/copy.png' className={ styles.toolButtonImg }/>
        </button>
      </div>
      <div className={ styles.colorEditors }>
        <input type='range'
          min='0' max='255' step='1'
          onChange={ event => console.log(event.target.value) } />
        <input type='range'
          min='0' max='255' step='1'
          onChange={ event => console.log(event.target.value) } />
        <input type='range'
          min='0' max='255' step='1'
          onChange={ event => console.log(event.target.value) } />
        <input type='range'
          min='0' max='1' step='0.01'
          onChange={ event => console.log(event.target.value) } />
      </div>
    </>
  )
}

export default PaletteEditorTools
