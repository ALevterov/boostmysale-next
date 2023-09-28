import clsx from 'clsx'
import styles from './index.module.css'
import { useEffect, useState } from 'react'
import i1 from '@/assets/cases/1.webp'
import i2 from '@/assets/cases/2.webp'
import i3 from '@/assets/cases/3.webp'

const images = [i1.src, i2.src, i3.src]
const Popup = () => {
  const [index, setIndex] = useState<number>(0)
  const [isOpened, setIsOpened] = useState(false)
  const handleClose = () => {
    setIsOpened(false)
  }
  useEffect(() => {
    window.addEventListener('open-popup', (e: any) => {
      const index = e.detail.index
      setIndex(index)
      setIsOpened(true)
    })
  }, [])
  useEffect(() => {
    const html = document.querySelector('html')
    isOpened
      ? (document.body.classList.add('lock'), html!.classList.add('lock'))
      : (document.body.classList.remove('lock'), html!.classList.remove('lock'))
  }, [isOpened])
  return (
    <div
      className={clsx({
        [styles.wrapper]: true,
        [styles.closed]: !isOpened,
      })}
      onClick={handleClose}
    >
      <svg
        className={styles.close}
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        onClick={handleClose}
      >
        <path
          d='M1 1L16.8771 17M17 1L1.12291 17'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
      <div className={styles.content}>
        <img className={styles.img} src={images[index]} alt='image' />
      </div>
    </div>
  )
}

export default Popup
