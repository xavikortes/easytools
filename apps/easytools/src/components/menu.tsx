import styles from './menu.module.css'

import { AppScreen } from '../consts/enums'
import { menuScreenTags } from '../consts/data'


type MenuProps = {
  isScreenActive: (screen: AppScreen) => boolean,
  onScreenTagClicked: (screen: AppScreen) => void
}

const Menu = ({ isScreenActive, onScreenTagClicked }: MenuProps) => {
  return (
    <div className={ styles.menu }>
      <span>
        SPRITE EDITOR
      </span>

      <div className={ styles.spriteEditorScreenTags }>
        {
          menuScreenTags.map(screenTag =>
            <button
              key={ screenTag.screen }
              className={
                `${ styles.screenTag } \
                  ${ isScreenActive(screenTag.screen) ? styles.active : '' }
                `
              }
              onClick={ () => onScreenTagClicked(screenTag.screen) }
            >
              <span>&nbsp;</span>
              <img src={ screenTag.sprite } className={ styles.toolbuttonImg }/>
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Menu
