import clsx from 'clsx'
import CardInscription from '../cardInscription'
import CardOrder from '../cardOrder'
import CardText from '../cardText'
import CardTitle from '../cardTitle'
import styles from './index.module.css'

interface ICard2 {
  title: string
  videos: string[]
  children: React.ReactNode
  inscription?: string
  videoClass: string
}
const Card2 = ({
  title,
  videos,
  children,
  inscription,
  videoClass,
}: ICard2) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <CardTitle>{title}</CardTitle>
          {inscription && <CardInscription>{inscription}</CardInscription>}
        </div>
        <CardText>{children}</CardText>
        <CardOrder />
      </div>
      <div
        className={clsx({
          [styles.right]: true,
          [videoClass]: videoClass,
        })}
      >
        <video autoPlay muted loop preload='none' playsInline>
          {videos.map(src => (
            <source key={src} src={src} />
          ))}
        </video>
      </div>
    </div>
  )
}

export default Card2
