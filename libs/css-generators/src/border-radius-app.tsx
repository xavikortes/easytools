import { useState } from 'react'

import { Menu } from '@easytools/components'
import { Strings } from '@easytools/consts'

import styles from './border-radius-app.module.css'


export function App() {
  const [topLeft, setTopLeft] = useState(0)
  const [topRight, setTopRight] = useState(0)
  const [bottomRight, setBottomRight] = useState(0)
  const [bottomLeft, setBottomLeft] = useState(0)

  const borderRadiusValue = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`

  return (
    <div className={ styles.wrapper }>
      <Menu
        title={ Strings.BorderRadiusAppTitle }
      />
      <div className={ styles.app }>
        <div className={ styles.target }
          style={{
            borderRadius: borderRadiusValue
          }}
        >
          &nbsp;
        </div>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.TopLeft }</span>
          <input type='range' className={ styles.input }
            value={ topLeft }
            min='0' max='300' step='1'
            onChange={ event => setTopLeft(parseInt(event.target.value)) } />
          <span className={ styles.controlValue }>{ topLeft }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.TopRight }</span>
          <input type='range' className={ styles.input }
            value={ topRight }
            min='0' max='300' step='1'
            onChange={ event => setTopRight(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ topRight }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.BottomRight }</span>
          <input type='range' className={ styles.input }
            value={ bottomRight }
            min='0' max='300' step='1'
            onChange={ event => setBottomRight(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ bottomRight }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.BottomLeft }</span>
          <input type='range' className={ styles.input }
            value={ bottomLeft }
            min='0' max='300' step='1'
            onChange={ event => setBottomLeft(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ bottomLeft }</span>
        </span>
        <div className={ styles.code }>
          <span>-webkit-border-radius: { borderRadiusValue };</span>
          <span>-moz-border-radius: { borderRadiusValue };</span>
          <span>border-radius: { borderRadiusValue };</span>
        </div>
      </div>
    </div>
  )
}

export default App
