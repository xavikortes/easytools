import { ReactElement } from 'react'

import styles from './button.module.css'


type ButtonProps = {
  text: string | ReactElement,
  className?: string,
  onClick?: () => void,
  title?: string,
}
  
const Button = ({ text, className, onClick, title }: ButtonProps) => {
  const classes = `${styles.button} ${className}`

  return (
    <button
      title={ title }
      className={ classes }
      onClick={ () => onClick && onClick() }>
        { text }
    </button>
  )
}

export default Button
