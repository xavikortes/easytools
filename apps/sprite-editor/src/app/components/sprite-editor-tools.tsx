import styles from './sprite-editor-tools.module.css';

import { Block } from '../types'
import { BLOCK_SIZE } from '../config'

// TODO
// Quitar pokemones chulos
// downloadPNG a una libreria de imagenes BlockToPng/PngToBlock
// Mejorar iconos?
// Herramienta seleccionada
// Herramienta lapiz / borrador
// Herramienta color picker
// Alguna herramienta mas (eliminar all, rellenar, espejar v/h)
// Subir png
// Mas iconos

const downloadPNG = (block: Block) => {
  const canvas = document.createElement("canvas")
  canvas.width = BLOCK_SIZE
  canvas.height = BLOCK_SIZE

  const context = canvas.getContext("2d")
  const imageData = context!.createImageData(BLOCK_SIZE, BLOCK_SIZE)
  const data = imageData.data

  block.forEach((item, idx) => {
    data[idx * 4 + 0] = item?.[0]
    data[idx * 4 + 1] = item?.[1]
    data[idx * 4 + 2] = item?.[2]
    data[idx * 4 + 3] = item?.[3] * 255
    data[idx * 4 + 4] = item?.[0]
  })

  context!.putImageData(imageData, 0, 0)

  canvas.toBlob(blob => {
    var url = (URL || webkitURL).createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'sprite.png'
    document.body.appendChild(a)
    a.click()
  });

  return true
}

type SpriteEditorToolsProps = {
  block: Block
}

const SpriteEditorTools = ({ block }: SpriteEditorToolsProps) => {
  return (
    <div className={ styles.spriteEditorTools }>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('pencil') }
      >
        <img src='assets/pencil.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('picker') }
      >
        <img src='assets/picker.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('trash') }
      >
        <img src='assets/trash.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('pikachu') }
      >
        <img src='assets/pikachu.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('seta') }
      >
        <img src='assets/seta.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('caterpie') }
      >
        <img src='assets/caterpie.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => console.log('ash') }
      >
        <img src='assets/ash.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => downloadPNG(block) }
      >
        <img src='assets/download.png' className={ styles.toolButtonImg }/>
      </button>
    </div>
  )
}

export default SpriteEditorTools
