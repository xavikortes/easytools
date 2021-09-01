import Button from './button'

import styles from './tool-button.module.css'


type ToolButtonProps = {
  img: string,
  className?: string,
  onClick?: () => void
}
  
const ToolButton = ({ img, className, onClick }: ToolButtonProps) => {
  const classes = `${styles.toolButton} ${className}`

  return (
    <Button
      className={ classes }
      onClick={ onClick }
      text={ <img src={ img } className={ styles.toolButtonImg } /> } />
  )
}

export default ToolButton
