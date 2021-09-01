import styles from './sprite-editor-tools.module.css'

import { Sprite } from '../consts/types'
import { SpriteEditorMode, Numbers } from '../consts/enums'

import { spriteToPng } from '../lib/image'
import { downloadFile } from '../lib/file'

import ToolButton from './tool-button'


const downloadPNG = (sprite: Sprite) => {
  spriteToPng(sprite, Numbers.SpriteSize, Numbers.SpriteSize)
    .toBlob(blob =>
      downloadFile(
        `#${(sprite.number + 1).toString().padStart(3, '0')}.png`,
        blob!
      )
    )
  return true
}

type SpriteEditorToolsProps = {
  isModeActive: (mode: SpriteEditorMode) => boolean,
  onModeClicked: (mode: SpriteEditorMode) => void,
  sprite: Sprite,
  setSprite: (sprite: Sprite) => void
}

const SpriteEditorTools = ({ isModeActive, onModeClicked, sprite, setSprite }: SpriteEditorToolsProps) => {
  const deleteSprite = () => {
    setSprite({
      ...sprite,
      pixels: sprite.pixels.map(_pixel => null)
    })
  }

  return (
    <div className={ styles.spriteEditorTools }>
      <ToolButton
        img='assets/pencil.png'
        className={ isModeActive(SpriteEditorMode.Paint) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Paint) } />

      <ToolButton
        img='assets/erase.png'
        className={ isModeActive(SpriteEditorMode.Erase) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Erase) } />

      <ToolButton
        img='assets/picker.png'
        className={ isModeActive(SpriteEditorMode.Pick) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Pick) } />

      <ToolButton
        img='assets/filler.png'
        className={ isModeActive(SpriteEditorMode.Fill) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Fill) } />

      <ToolButton
        img='assets/trash.png'
        onClick={ () => deleteSprite() } />

      <ToolButton
        img='assets/pikachu.png' />

      <ToolButton
        img='assets/caterpie.png' />

      <ToolButton
        img='assets/download.png'
        onClick={ () => downloadPNG(sprite) } />

    </div>
  )
}

export default SpriteEditorTools
