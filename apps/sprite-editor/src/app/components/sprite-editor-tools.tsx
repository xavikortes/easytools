import styles from './sprite-editor-tools.module.css';

import { Sprite } from '../types'
import { SPRITE_SIZE } from '../config'

import { spriteToPng } from '../lib/image'
import { downloadFile } from '../lib/file';
import { SpriteEditorMode } from '../enums';


const downloadPNG = (spriteNumber: number, sprite: Sprite) => {
  spriteToPng(sprite, SPRITE_SIZE, SPRITE_SIZE)
    .toBlob(blob =>
      downloadFile(
        `#${(spriteNumber + 1).toString().padStart(3, '0')}.png`,
        blob!
      )
    )
  return true
}

type SpriteEditorToolsProps = {
  isModeActive: (mode: SpriteEditorMode) => boolean,
  onModeClicked: (mode: SpriteEditorMode) => void,
  spriteNumber: number,
  sprite: Sprite,
  setSprite: (sprite: Sprite) => void
}

const SpriteEditorTools = ({ isModeActive, onModeClicked, spriteNumber, sprite, setSprite }: SpriteEditorToolsProps) => {
  const deleteSprite = () => {
    setSprite(sprite.map(_pixel => null))
  }

  const getToolButtonProps = (mode?: SpriteEditorMode) => ({
    className: `${styles.toolButton} \
       ${ mode && isModeActive(mode) ? styles.activeButton : '' }`,
    onClick: () => mode && onModeClicked(mode)
  })

  return (
    <div className={ styles.spriteEditorTools }>
      <button
        { ...getToolButtonProps(SpriteEditorMode.Paint) }
      >
        <img src='assets/pencil.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps(SpriteEditorMode.Erase) }
      >
        <img src='assets/erase.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps(SpriteEditorMode.Pick) }
      >
        <img src='assets/picker.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps(SpriteEditorMode.Fill) }
      >
        <img src='assets/filler.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps() }
        onClick={ () => deleteSprite() }
      >
        <img src='assets/trash.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps() }
      >
        <img src='assets/pikachu.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps() }
      >
        <img src='assets/caterpie.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        { ...getToolButtonProps() }
        onClick={ () => downloadPNG(spriteNumber, sprite) }
      >
        <img src='assets/download.png' className={ styles.toolButtonImg }/>
      </button>
    </div>
  )
}

export default SpriteEditorTools
