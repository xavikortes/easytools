import React, { useState } from 'react';
import styles from './canvas.module.css';

import { Sprite } from '../types'
import { SPRITE_SIZE } from '../config'


type CanvasProps = {
  sprite: Sprite,
  handleClick: (idx: number) => void
}

type DummyEvent = {
  preventDefault: () => void
}

const Canvas = ({ sprite, handleClick }: CanvasProps) => {
  const [toolActivated, setToolActivated] = useState(false)

  const handleMouseTouchEvents = (event: DummyEvent, value: boolean, idx?: number) => {
    event.preventDefault()

    setToolActivated(value)
    value && handleClick(idx!)
  }

  const onTouchEvent = (event: React.TouchEvent) => {
    event.preventDefault()

    for (var i = 0; i < event.targetTouches.length; i++) {
      let touch = event.targetTouches[i]
      let element = document.elementFromPoint(touch.clientX, touch.clientY)! as HTMLElement
      let id = parseInt(element.dataset.id!)

      handleClick(id)
    }
  }

  return (
    <ul
      className={ styles.canvas }
      onMouseLeave={ event => handleMouseTouchEvents(event, false) }
      >
      {
        sprite.pixels.map((pixel, idx) =>
          <li
            key={ idx }
            data-id={ idx }
            className={ styles.pixel }
            onTouchStart={ event => onTouchEvent(event) }
            onTouchMove={ event => onTouchEvent(event) }
            onTouchEnd={ event => onTouchEvent(event) }
            onMouseDown={ event => handleMouseTouchEvents(event, true, idx) }
            onMouseUp={ event => handleMouseTouchEvents(event, false) }
            onMouseOver={ () => !!toolActivated && handleClick(idx) }
            style={{
              width: `calc(100% / ${SPRITE_SIZE})`,
              paddingBottom: `calc(100% / ${SPRITE_SIZE})`,
              backgroundColor: pixel && !!pixel.length ? `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})` : 'transparent'
            }}
          />
        )
      }
    </ul>
  )
}

export default Canvas
