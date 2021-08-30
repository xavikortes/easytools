import styles from './palette-editor-tools.module.css'


type PaletteEditorToolsProps = {
  onDeletePalette: () => void,
  onCopyPalette: () => void
}

const PaletteEditorTools = ({ onDeletePalette, onCopyPalette }: PaletteEditorToolsProps) => {
  return (
    <div className={ styles.paletteEditorTools }>
      <button
        className={ styles.toolButton }
        onClick={ () => onDeletePalette() }
      >
        <img src='assets/trash.png' className={ styles.toolButtonImg }/>
      </button>
      <button
        className={ styles.toolButton }
        onClick={ () => onCopyPalette() }
      >
        <img src='assets/pikachu.png' className={ styles.toolButtonImg }/>
      </button>
    </div>
  )
}

export default PaletteEditorTools
