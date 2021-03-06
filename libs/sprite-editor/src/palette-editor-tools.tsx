import { Types, Data, AssetsImg, DbName, Strings } from '@easytools/consts'
import { writeDb } from '@easytools/lib'
import { ToolButton } from '@easytools/components'

import styles from './palette-editor-tools.module.css'


type PaletteEditorToolsProps = {
  palette: Types.ColorPalette,
  paletteList: Types.PaletteList,
  setPaletteList: (paletteList: Types.PaletteList) => void,
  currentColor?: Types.Color,
  setCurrentColor: (color: Types.Color) => void,
  onChangePalette: (palette: Types.ColorPalette) => void
}

const PaletteEditorTools = ({ palette, paletteList, setPaletteList, currentColor, setCurrentColor, onChangePalette }: PaletteEditorToolsProps) => {
  const onDeletePalette = () => {
    const paletteIndex = Object.keys(paletteList).findIndex(key => key === palette.name)
    const nextSelected = Object.values(paletteList)[!!paletteIndex ? paletteIndex - 1 : paletteIndex + 1]

    let newPaletteList: Types.PaletteList = {
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

    const newPaletteList: Types.PaletteList = [
      ...palettes.slice(0, paletteIndex),
      palette,
      { name: newName, colors: [ ...palette.colors ] },
      ...palettes.slice(paletteIndex + 1)
    ].reduce((accum, item) => ({ ...accum, [item.name]: item }), {})

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(newPaletteList[newName])
  }

  const restoreDefaultPalette = () => {
    const newPaletteList: Types.PaletteList = {
      ...paletteList,
      [palette.name]: (Data.initialPaletteList as Types.PaletteList)[palette.name]
    }

    setPaletteList(newPaletteList)
    writeDb(DbName.PaletteList, newPaletteList)

    onChangePalette(newPaletteList[palette.name])
  }

  const onColorChanged = (idx: number, value: string) => {
    const colorIdx = palette.colors.findIndex(color => color === currentColor)
    const palettes = Object.values(paletteList)
    const paletteIdx = Object.keys(paletteList).findIndex(key => key === palette.name)

    const newCurrentColor = [
      ...currentColor!.slice(0, idx),
      idx ===3 ? parseFloat(value) : parseInt(value),
      ...currentColor!.slice(idx + 1)
    ]

    const newPaletteList: Types.PaletteList = [
      ...palettes.slice(0, paletteIdx),
      {
        ...palette,
        colors: [
          ...palette.colors.slice(0, colorIdx),
          newCurrentColor,
          ...palette.colors.slice(colorIdx + 1)
        ]
      },
      ...palettes.slice(paletteIdx + 1)
    ].reduce((accum, item) => ({ ...accum, [item.name]: item }), {})

    setPaletteList(newPaletteList)
    setCurrentColor(newCurrentColor)
    writeDb(DbName.PaletteList, newPaletteList)
  }

  return (
    <>
      <div className={ styles.paletteEditorTools }>
        <ToolButton
          onClick={ () => onDeletePalette() }
          img={ AssetsImg.Delete }
          title={ Strings.Delete } />
        <ToolButton
          onClick={ () => onCopyPalette() }
          img={ AssetsImg.Copy }
          title={ Strings.Copy } />
        {
          palette.name in Data.initialPaletteList &&
            <ToolButton
              onClick={ () => restoreDefaultPalette() }
              img={ AssetsImg.Restore }
              title={ Strings.Restore } />
        }
      </div>
      {
        currentColor &&
          <div className={ styles.colorEditors }>
            <span>
              <input type='range'
                min='0' max='255' step='1' value={ currentColor[0] }
                onChange={ event => onColorChanged(0, event.target.value) } />
              { currentColor[0] }
            </span>
            <span>
              <input type='range'
                min='0' max='255' step='1' value={ currentColor[1] }
                onChange={ event => onColorChanged(1, event.target.value) } />
              { currentColor[1] }
            </span>
            <span>
              <input type='range'
                min='0' max='255' step='1' value={ currentColor[2] }
                onChange={ event => onColorChanged(2, event.target.value) } />
              { currentColor[2] }
            </span>
            <span>
              <input type='range'
                min='0' max='1' step='0.01' value={ currentColor[3] }
                onChange={ event => onColorChanged(3, event.target.value) } />
              { currentColor[3] }
            </span>
          </div>
      }
    </>
  )
}

export default PaletteEditorTools
