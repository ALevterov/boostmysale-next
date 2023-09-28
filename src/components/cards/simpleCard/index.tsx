import clsx from 'clsx'
import CardInscription from '../cardInscription'
import CardOrder from '../cardOrder'
import CardText from '../cardText'
import CardTitle from '../cardTitle'
import styles from './index.module.css'
interface ISC {
  title: string
  children: React.ReactNode
  inscription: string
  white?: boolean
}
const SimpleCard = ({ title, children, inscription, white }: ISC) => {
  return (
    <div
      className={clsx({
        [styles.container]: true,
        [styles.white]: white,
      })}
    >
      <div className={styles.top}>
        <CardTitle>{title}</CardTitle>
        <CardInscription>{inscription}</CardInscription>
      </div>
      <div className={styles.bottom}>
        <CardText>{children}</CardText>
        <CardOrder />
      </div>
    </div>
  )
}

export default SimpleCard
