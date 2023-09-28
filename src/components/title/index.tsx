import clsx from 'clsx'
import styles from './index.module.css'
const Title = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <h1
      className={clsx({
        [className || '']: true,
        [styles.h1]: true,
      })}
    >
      {children}
    </h1>
  )
}

export default Title
