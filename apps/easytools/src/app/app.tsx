import { HashRouter, Switch, Route } from 'react-router-dom'

import HomeApp from '@easytools/home'
import SpriteEditorApp from '@easytools/sprite-editor'
import { BoxShadowApp } from '@easytools/css-generators'

import styles from './app.module.css'
import { Routes } from '@easytools/consts'


export function App() {
  return (
    <div className={ styles.container }>
      <HashRouter>
        <Switch>
          <Route exact path={ Routes.Home }>
            <HomeApp />
          </Route>
          <Route path={ Routes.SpriteEditor }>
            <SpriteEditorApp />
          </Route>
          <Route path={ Routes.BoxShadow }>
            <BoxShadowApp />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
