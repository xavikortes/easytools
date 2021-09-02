import { Types } from '@easytools/consts'

import styles from './palette.module.css'


type PaletteProps = {
  palette: Types.ColorPalette,
  isColorActive?: (color: Types.Color) => boolean,
  onColorClicked?: (color: Types.Color) => void,
  onNameChange?: (newName: string) => void
}

const Palette = ({ palette, isColorActive, onColorClicked, onNameChange }: PaletteProps) => {  
  const handleNameChange = (event: React.FormEvent<HTMLSpanElement>) => {
    onNameChange && onNameChange((event.target as HTMLElement).innerHTML)
  }

  return (
    <div className={ styles.paletteWrapper }>
      <div
        contentEditable={ !!onNameChange }
        onBlur={ (event) => handleNameChange(event) }
        suppressContentEditableWarning={ true }
      >
        { palette.name }
      </div>
      <ul className={ styles.palette }>
      {
        palette.colors.map((color, idx) =>
          <li
            key={ idx }
            className={
              `${ styles.paletteColor } \
                ${ isColorActive && isColorActive(color) ? styles.active: '' } \
                ${ onColorClicked && styles.clickableColor }
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
