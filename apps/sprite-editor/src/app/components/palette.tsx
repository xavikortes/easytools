import styles from './palette.module.css';

import { ColorPalette, Color } from '../types'


type PaletteProps = {
  palette: ColorPalette,
  isColorActive?: (color: Color) => boolean,
  onColorClicked?: (color: Color) => void
}

const Palette = ({ palette, isColorActive, onColorClicked }: PaletteProps) => {
  return (
    <div className={ styles.paletteWrapper }>
      <span>{ palette.name }</span>
      <ul className={ styles.palette }>
      {
        palette.colors.map((color, idx) =>
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
    </div>
  )
}

export default Palette
