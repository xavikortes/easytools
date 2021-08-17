import styles from './menu.module.css'

import { SpriteEditorMode } from '../types'

// TODO
// Cambiar caterpie por 4 pokemones para representar sheet

type MenuProps = {
  isModeActive: (mode: SpriteEditorMode) => boolean,
  onModeClicked: (mode: SpriteEditorMode) => void
}

const Menu = ({ isModeActive, onModeClicked }: MenuProps) => {
  return (
    <div className={ styles.menu }>
      <span>
        SPRITE EDITOR
      </span>

      <div className={ styles.spriteEditorModes }>
        <button
          className={
            `${styles.modeTag} \
              ${isModeActive('palette') ? styles.active: ''}
            `
          }
          onClick={ () => onModeClicked('palette') }
        >
          <span>&nbsp;</span>
          <img src='assets/palette.png' className={ styles.toolbuttonImg }/>
        </button>
        <button
          className={
            `${styles.modeTag} \
              ${isModeActive('sprite') ? styles.active: ''}
            `
          }
          onClick={ () => onModeClicked('sprite') }
        >
          <span>&nbsp;</span>
          <img src='assets/pikachu.png' className={ styles.toolbuttonImg }/>
        </button>
        <button
          className={
            `${styles.modeTag} \
              ${isModeActive('spritesheet') ? styles.active: ''}
            `
          }
          // onClick={ () => onModeClicked('spritesheet') }
        >
          <span>&nbsp;</span>
          <img src='assets/caterpie.png' className={ styles.toolbuttonImg }/>
        </button>
      </div>
    </div>
  )
}

export default Menu
