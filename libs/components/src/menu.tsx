import { Link } from 'react-router-dom'

import { Types, SpriteEditorScreen, Strings, AssetsImg } from '@easytools/consts'
import { ToolButton } from '@easytools/components'

import styles from './menu.module.css'


type MenuProps = {
  title: string,
  screenTags?: Types.ScreenTag[],
  isScreenActive?: (screen: SpriteEditorScreen) => boolean,
  onScreenTagClicked?: (screen: SpriteEditorScreen) => void
}

const Menu = ({ title, screenTags, isScreenActive, onScreenTagClicked }: MenuProps) => {
  return (
    <div className={ styles.menu }>
      <span className={ styles.title }>
        <Link to='/'>
          <ToolButton
            className={ styles.home }
            img={ AssetsImg.Home }
            title={ Strings.Home } />
        </Link>
        <span>
          { title }
        </span>
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
