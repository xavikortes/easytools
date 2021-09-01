import Button from './button'

import styles from './tool-button.module.css'


type ToolButtonProps = {
  img: string,
  className?: string,
  onClick?: () => void,
  title: string,
}
  
const ToolButton = ({ img, className, onClick, title }: ToolButtonProps) => {
  const classes = `${styles.toolButton} ${className}`

  return (
    <Button
      className={ classes }
      onClick={ onClick }
      text={ <img src={ img } className={ styles.toolButtonImg } /> }
      title={ title } />
  )
}

export default ToolButton
