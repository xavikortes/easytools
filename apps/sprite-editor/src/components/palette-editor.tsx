import styles from './palette-editor.module.css';

import { ColorPalette } from '../consts/types'
import { paletteList } from '../consts/data';

import Palette from './palette'


type ButtonProps = {
  text: string,
  className?: string,
  onClick?: () => void
}

const Button = ({ text, className, onClick }: ButtonProps) => {
  const classes = `${styles.button} ${className}`
  return (
    <button
      className={ classes }
      onClick={ () => onClick && onClick() }>
        {text}
    </button>
  )
}


type PaletteEditorProps = {
  isPaletteActive: (palette: ColorPalette) => boolean,
  onChangePalette: (palette: ColorPalette) => void,
  addNewPalette: () => void
}

const PaletteEditor = ({ isPaletteActive, onChangePalette, addNewPalette }: PaletteEditorProps) => {
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
                  onChange={ () => { /* Error fix */ } }
                />
                <Palette
                  palette={ palette }
                />
            </li>
          )
        }
        <Button
          className={ styles.newPaletteButton }
          text='+ Nueva Paleta'
          onClick={ () => addNewPalette() } />
      </ul>
    </div>
  )
}

export default PaletteEditor
