import { HashRouter, Switch, Route } from 'react-router-dom'

import HomeApp from '@easytools/home'
import SpriteEditorApp from '@easytools/sprite-editor'
import { BoxShadowApp } from '@easytools/css-generators'

import styles from './app.module.css'


export function App() {
  return (
    <div className={ styles.container }>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomeApp />
          </Route>
          <Route path="/sprite-editor">
            <SpriteEditorApp />
          </Route>
          <Route path="/box-shadow">
            <BoxShadowApp />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
