import { Menu } from '@easytools/components'
import { Strings } from '@easytools/consts'
import { useState } from 'react'

import styles from './app.module.css'


export function App() {
  const [shiftRight, setShiftRight] = useState(5)
  const [shiftDown, setShiftDown] = useState(5)
  const [spread, setSpread] = useState(5)
  const [blur, setBlur] = useState(15)
  const [opacity, setOpacity] = useState(1)
  const [inset, setInset] = useState(false)
  const [hexColor, setHexColor] = useState('#000')
  const [color, setColor] = useState([0, 0, 0])
  const [targetColor, setTargetColor] = useState('#a99379')

  const setPreColor = (value: string) => {
    setHexColor(value)
    setColor([
      parseInt(value.substr(1,2), 16),
      parseInt(value.substr(3,2), 16),
      parseInt(value.substr(5,2), 16),
    ])
  }

  const boxShadowValue = `${inset ? 'inset' : ''} ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px rgba(${color.join(', ')}, ${opacity})`

  return (
    <div className={ styles.wrapper }>
      <Menu
        title='CSS BOX-SHADOW GENERATOR'
      />
      <div className={ styles.app }>
        <div className={ styles.target }
          style={{
            boxShadow: boxShadowValue,
            backgroundColor: targetColor
          }}
        >
          &nbsp;
        </div>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.ShiftRight }</span>
          <input type='range' className={ styles.input }
            value={ shiftRight }
            min='-50' max='50' step='1'
            onChange={ event => setShiftRight(parseInt(event.target.value)) } />
          <span className={ styles.controlValue }>{ shiftRight }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.ShiftDown }</span>
          <input type='range' className={ styles.input }
            value={ shiftDown }
            min='-50' max='50' step='1'
            onChange={ event => setShiftDown(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ shiftDown }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.Spread }</span>
          <input type='range' className={ styles.input }
            value={ spread }
            min='-30' max='50' step='1'
            onChange={ event => setSpread(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ spread }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.Blur }</span>
          <input type='range' className={ styles.input }
            value={ blur }
            min='0' max='50' step='1'
            onChange={ event => setBlur(parseInt(event.target.value)) } />
            <span className={ styles.controlValue }>{ blur }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.Opacity }</span>
          <input type='range' className={ styles.input }
            value={ opacity }
            min='0' max='1' step='0.01'
            onChange={ event => setOpacity(parseFloat(event.target.value)) } />
            <span className={ styles.controlValue }>{ opacity }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.Inset }</span>
          <input type='checkbox' className={ styles.input }
            checked={ inset }
            onChange={ event => setInset(event.target.checked) } />
          <span className={ styles.controlValue }>{ inset ? Strings.Yes : Strings.No }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.Color }</span>
          <input type='color' className={ styles.input }
            value={ hexColor }
            onChange={ event => setPreColor(event.target.value) } />
          <span className={ styles.controlValue }>{ hexColor }</span>
        </span>
        <span className={ styles.control }>
          <span className={ styles.controlName }>{ Strings.TargetColor }</span>
          <input type='color' className={ styles.input }
            value={ targetColor }
            onChange={ event => setTargetColor(event.target.value) } />
          <span className={ styles.controlValue }>{ targetColor }</span>
        </span>
        <div className={ styles.code }>
          <span>-webkit-box-shadow: { boxShadowValue };</span>
          <span>box-shadow: { boxShadowValue };</span>
        </div>
      </div>
    </div>
  )
}

export default App
