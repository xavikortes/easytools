import styles from './canvas.module.css';

import { Block, Color } from '../types'
import { BLOCK_SIZE } from '../config'

// TODO
// Canvas debe ser mucho mas generico
// Le dices el width/height
// Le dices si el tamaño debe calcularse en funcion del total
//  o de una manera fija
// Le dices que hacer cuando se haga click
// Le dices como pintarse

type CanvasProps = {
  block: Block,
  setBlock: (block: Block) => void,
  selectedColor: Color
}

const Canvas = ({ block, setBlock, selectedColor }: CanvasProps) => {
  const setPixel = (event: React.MouseEvent<HTMLElement>, pixel: number, color: Color) => {
    event.preventDefault()
    setBlock([
      ...block.slice(0, pixel),
      color,
      ...block.slice(pixel + 1)
    ])
  }

  return (
    <ul className={ styles.canvas }>
      {
        block.map((pixel, idx) =>
          <li
            key={ idx }
            className={ styles.pixel }
            onClick={ (event) => setPixel(event, idx, selectedColor) }
            style={{
              width: `calc(100% / ${BLOCK_SIZE})`,
              paddingBottom: `calc(100% / ${BLOCK_SIZE})`,
              backgroundColor: pixel && !!pixel.length ? `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})` : 'transparent'
            }}
          />
        )
      }
    </ul>
  )
}

export default Canvas
