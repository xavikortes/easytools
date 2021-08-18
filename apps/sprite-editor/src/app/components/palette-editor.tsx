import styles from './palette-editor.module.css';

import { ColorPalette } from '../types'
import { paletteList } from '../data';

import Palette from './palette'


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
                  onChange={ () => { /* Error fix */ } }
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

export default PaletteEditor
