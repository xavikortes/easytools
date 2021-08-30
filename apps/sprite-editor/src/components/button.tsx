import styles from './button.module.css'


type ButtonProps = {
  text: string,
  className?: string,
  onClick?: () => void
}
  
const Button = ({ text, className, onClick }: ButtonProps) => {
  const classes = `${styles.button} ${className}`
  return (
    <button
      className={ classes }
      onClick={ () => onClick && onClick() }>
        {text}
    </button>
  )
}

export default Button
