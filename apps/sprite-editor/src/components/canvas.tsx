import { useState } from 'react'
import styles from './canvas.module.css'


type CanvasProps = {
  width: number,
  height: number,
  handleClick: (idx: number) => void,
  paintItem: (idx: number) => string,
  isDragActive: () => boolean,
}

type DummyEvent = {
  preventDefault: () => void
}

const Canvas = ({ width, height, handleClick, paintItem, isDragActive }: CanvasProps) => {
  const [toolActivated, setToolActivated] = useState(false)

  const handleMouseEvents = (event: DummyEvent, value: boolean, idx?: number) => {
    event.preventDefault()

    isDragActive() && setToolActivated(value)
    value && handleClick && handleClick(idx!)
  }

  const onTouchEvent = (event: React.TouchEvent) => {
    event.preventDefault()

    for (var i = 0; i < event.targetTouches.length; i++) {
      let touch = event.targetTouches[i]
      let element = document.elementFromPoint(touch.clientX, touch.clientY)! as HTMLElement
      let id = parseInt(element.dataset.id!)

      if (id >= 0 && id < (width * height)) {
        handleClick && handleClick(id)
      }
    }
  }

  return (
    <ul
      className={ styles.canvas }
      onMouseLeave={ event => handleMouseEvents(event, false) }
    >
      {
        new Array(width * height).fill(null).map((_item, idx) =>
          <li
            key={ idx }
            data-id={ idx }
            className={ styles.pixel }
            onTouchStart={ event => onTouchEvent(event) }
            onTouchMove={ event => onTouchEvent(event) }
            onTouchEnd={ event => onTouchEvent(event) }
            onMouseDown={ event => handleMouseEvents(event, true, idx) }
            onMouseUp={ event => handleMouseEvents(event, false) }
            onMouseOver={ () => !!toolActivated && handleClick && handleClick(idx) }
            style={{
              width: `calc(100% / ${width})`,
              paddingBottom: `calc(100% / ${height})`,
              background: paintItem && paintItem(idx)
            }}
          />
        )
      }
    </ul>
  )
}

export default Canvas
