import { clsx } from 'clsx'
import styles from './index.module.css'
const Container = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [className || '']: true,
      })}
    >
      {children}
    </div>
  )
}

export default Container
