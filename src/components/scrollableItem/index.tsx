import { useEffect, useRef } from 'react'
import styles from './index.module.css'
import QuotesIcon from '@/icons/quotes'

interface ISI {
  index: number
  author: string
  children: string
}
const ScrollableItem = ({ author, index, children }: ISI) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const callback = () => {
      window.dispatchEvent(
        new CustomEvent('item-in-view', {
          bubbles: true,
          composed: true,
          detail: {
            index: index - 1,
          },
        })
      )
    }
    let threshold
    if (window.innerWidth > 768) {
      threshold = 1
    } else {
      threshold = 0.8
    }
    const observer = new IntersectionObserver(callback, {
      threshold: threshold,
    })
    if (ref.current) observer.observe(ref.current)
  }, [])
  return (
    <div className={styles.container} ref={ref}>
      {index !== 1 && (
        <div className={styles.indexArea}>
          <div className={styles.line}></div>
          <div className={styles.index}>#0{index}</div>
        </div>
      )}
      <h3 className={styles.author}>{author}</h3>
      <div className={styles.divider}></div>
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
        <QuotesIcon />
      </div>
    </div>
  )
}

export default ScrollableItem
