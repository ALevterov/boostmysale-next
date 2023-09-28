import { handleClick } from '@/helpers/handleClick'
import styles from './index.module.css'
import OrangeArrow from '@/icons/OrangeArrow'

const CardOrder = () => {
  return (
    <a className={styles.order} data-href='about' onClick={handleClick}>
      order service <OrangeArrow />
    </a>
  )
}

export default CardOrder
