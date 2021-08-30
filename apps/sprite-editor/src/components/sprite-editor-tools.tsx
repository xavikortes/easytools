import styles from './sprite-editor-tools.module.css'

import { Sprite } from '../consts/types'
import { SpriteEditorMode, Numbers } from '../consts/enums'

import { spriteToPng } from '../lib/image'
import { downloadFile } from '../lib/file'


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
        onClick={ () => downloadPNG(sprite) }
      >
        <img src='assets/download.png' className={ styles.toolButtonImg }/>
      </button>
    </div>
  )
}

export default SpriteEditorTools
