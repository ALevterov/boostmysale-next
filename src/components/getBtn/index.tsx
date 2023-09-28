import clsx from 'clsx'
import styles from './index.module.css'
import { handleClick } from '@/helpers/handleClick'
const GetBtn = ({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick?: any
}) => {
  return (
    <button
      className={clsx({
        [styles.btn]: true,
        [className || '']: true,
      })}
      data-href='about'
      onClick={onClick || handleClick}
    >
      {children}
    </button>
  )
}

export default GetBtn
