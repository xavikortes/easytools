import styles from './palette.module.css';

import { Palette as PaletteType, Color } from '../types'


type PaletteProps = {
  palette: PaletteType,
  isColorActive?: (color: Color) => boolean,
  onColorClicked?: (color: Color) => void
}

const Palette = ({ palette, isColorActive, onColorClicked }: PaletteProps) => {
  return (
    <ul className={ styles.palette }>
    {
      palette.map((color, idx) =>
        <li
          key={ idx }
          className={
            `${styles.paletteColor} \
              ${isColorActive && isColorActive(color) ? styles.active: ''}
            `
          }
          onClick={ () => onColorClicked && onColorClicked(color) }
          style={{
            backgroundColor: color ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})` :  'transparent'
          }}
        />
      )
    }
    </ul>
  )
}

export default Palette
