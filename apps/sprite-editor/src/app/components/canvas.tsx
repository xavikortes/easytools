import styles from './canvas.module.css';

import { Sprite } from '../types'
import { SPRITE_SIZE } from '../config'


type CanvasProps = {
  sprite: Sprite,
  handleClick: (
    event: React.MouseEvent<HTMLElement>,
    idx: number
  ) => void
}

const Canvas = ({ sprite, handleClick }: CanvasProps) => {
  return (
    <ul className={ styles.canvas }>
      {
        sprite.pixels.map((pixel, idx) =>
          <li
            key={ idx }
            className={ styles.pixel }
            onClick={ (event) => handleClick(event, idx) }
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
