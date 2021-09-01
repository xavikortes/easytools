import { AppScreen } from '../consts/enums'
import { menuScreenTags } from '../consts/data'

import ToolButton from './tool-button'

import styles from './menu.module.css'


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
            <ToolButton
              key={ screenTag.screen }
              img={ screenTag.sprite }
              className={
                `${ styles.screenTag } \
                  ${ isScreenActive(screenTag.screen) ? styles.active : '' }
                `
              }
              onClick={ () => onScreenTagClicked(screenTag.screen) } />
          )
        }
      </div>
    </div>
  )
}

export default Menu
