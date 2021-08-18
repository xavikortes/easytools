import styles from './canvas.module.css';

import { Sprite, Color } from '../types'
import { SPRITE_SIZE } from '../config'


type CanvasProps = {
  sprite: Sprite,
  setSprite: (sprite: Sprite) => void,
  selectedColor: Color
}

const Canvas = ({ sprite: sprite, setSprite: setSprite, selectedColor }: CanvasProps) => {
  const setPixel = (event: React.MouseEvent<HTMLElement>, pixel: number, color: Color) => {
    event.preventDefault()
    setSprite([
      ...sprite.slice(0, pixel),
      color,
      ...sprite.slice(pixel + 1)
    ])
  }

  return (
    <ul className={ styles.canvas }>
      {
        sprite.map((pixel, idx) =>
          <li
            key={ idx }
            className={ styles.pixel }
            onClick={ (event) => setPixel(event, idx, selectedColor) }
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
