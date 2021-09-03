import { Link } from 'react-router-dom'

import { Menu } from '@easytools/components'
import { Data, Strings } from '@easytools/consts'

import styles from './home-app.module.css'


export function App() {
  return (
    <div className={ styles.wrapper }>
      <Menu
        title={ Strings.AppTitle }
      />
      <div className={ styles.app }>
        <div className={ styles.appList }>
          {
            Data.Apps.map(app =>
              <Link to={ app.path } key={ app.app } className={ styles.appItem }>
                <img src={ app.icon } className={ styles.appIcon } />
                <span className={ styles.appTitle }>
                  { app.title }
                </span>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
