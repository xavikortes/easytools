import { Sprite } from '../consts/types'
import { SpriteEditorMode, Numbers, Strings, AssetsImg } from '../consts/enums'

import { spriteToPng } from '../lib/image'
import { downloadFile } from '../lib/file'

import ToolButton from './tool-button'

import styles from './sprite-editor-tools.module.css'


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
        img={ AssetsImg.Paint }
        className={ isModeActive(SpriteEditorMode.Paint) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Paint) }
        title={ Strings.PaintMode } />

      <ToolButton
        img={ AssetsImg.Erase }
        className={ isModeActive(SpriteEditorMode.Erase) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Erase) }
        title={ Strings.EraseMode } />

      <ToolButton
        img={ AssetsImg.Pick }
        className={ isModeActive(SpriteEditorMode.Pick) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Pick) }
        title={ Strings.PickMode } />

      <ToolButton
        img={ AssetsImg.Fill }
        className={ isModeActive(SpriteEditorMode.Fill) ? styles.activeButton : undefined }
        onClick={ () => onModeClicked(SpriteEditorMode.Fill) }
        title={ Strings.FillMode } />

      <ToolButton
        img={ AssetsImg.Delete }
        onClick={ () => deleteSprite() }
        title={ Strings.Delete } />

      <ToolButton
        img={ AssetsImg.Sprite }
        title={ Strings.NotImplemented } />

      <ToolButton
        img={ AssetsImg.SpriteSheet }
        title={ Strings.NotImplemented } />

      <ToolButton
        img={ AssetsImg.Download }
        onClick={ () => downloadPNG(sprite) }
        title={ Strings.Download } />

    </div>
  )
}

export default SpriteEditorTools
