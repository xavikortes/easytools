import { Types, AppScreen } from '@easytools/consts'
import { ToolButton } from '@easytools/components'

import styles from './menu.module.css'


type MenuProps = {
  title: string,
  screenTags?: Types.ScreenTag[],
  isScreenActive?: (screen: AppScreen) => boolean,
  onScreenTagClicked?: (screen: AppScreen) => void
}

const Menu = ({ title, screenTags, isScreenActive, onScreenTagClicked }: MenuProps) => {
  return (
    <div className={ styles.menu }>
      <span>
        { title }
      </span>

      <div className={ styles.screenTags }>
        {
          screenTags?.map(screenTag =>
            <div
              key={ screenTag.screen }
              className={
                `${ styles.screenTag } \
                  ${ isScreenActive && isScreenActive(screenTag.screen) ? styles.active : '' }
                `
              }
            >
              <ToolButton
                img={ screenTag.icon }
                title={ screenTag.title }
                onClick={ () => onScreenTagClicked && onScreenTagClicked(screenTag.screen) } />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Menu
