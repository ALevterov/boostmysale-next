import OrangeArrow from '@/icons/OrangeArrow'
import styles from './index.module.css'
import CardTitle from '../cardTitle'
import CardInscription from '../cardInscription'
import CardOrder from '../cardOrder'
import CardText from '../cardText'
import { useState, useEffect } from 'react'
interface ICard1 {
  children: React.ReactNode
  videos: string[]
  title: string
  inscription: string
}
const Card1 = ({ children, videos, title, inscription }: ICard1) => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <CardTitle>{title}</CardTitle>
          <CardInscription>{inscription}</CardInscription>
        </div>
        {isMobile && (
          <div className={styles.mobileVideo}>
            <video autoPlay muted loop preload='none' playsInline>
              {videos.map(src => (
                <source key={src} src={src} />
              ))}
            </video>
          </div>
        )}
        <CardText>{children}</CardText>
        <CardOrder />
      </div>
      {!isMobile && (
        <div className={styles.right}>
          <video autoPlay muted loop preload='none' playsInline>
            {videos.map(src => (
              <source key={src} src={src} />
            ))}
          </video>
        </div>
      )}
    </div>
  )
}

export default Card1
