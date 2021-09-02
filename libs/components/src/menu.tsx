import { Types, AppScreen } from '@easytools/consts'
import { ToolButton } from '@easytools/components'

import styles from './menu.module.css'


type MenuProps = {
  title: string,
  screenTags: Types.ScreenTag[],
  isScreenActive: (screen: AppScreen) => boolean,
  onScreenTagClicked: (screen: AppScreen) => void
}

const Menu = ({ title, screenTags, isScreenActive, onScreenTagClicked }: MenuProps) => {
  return (
    <div className={ styles.menu }>
      <span>
        { title }
      </span>

      <div className={ styles.spriteEditorScreenTags }>
        {
          screenTags.map(screenTag =>
            <ToolButton
              key={ screenTag.screen }
              img={ screenTag.sprite }
              title={ screenTag.title }
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
