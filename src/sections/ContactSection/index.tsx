import Container from '@/components/container'
import styles from './index.module.css'
import WhiteArrow from '@/icons/WhiteArrow'
import { handleClick } from '@/helpers/handleClick'

export const ContactInner = ({onLinkClick}: {onLinkClick: (e: any) => void}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>CONTACTS</div>
      <div className={styles.right}>
        <div className={styles.text}>
          We are here to answer any questions you may have. Send us a message
        </div>
        <div className={styles.icon}>
          <WhiteArrow />
        </div>
        <div className={styles.text} data-href="about" onClick={onLinkClick}>bmysales@gmail.com</div>
      </div>
    </div>
  )
}

const ContactSection = () => {
  return (
    <section className={styles.section} id='contact-us'>
      <Container>
        <ContactInner onLinkClick={handleClick} />
      </Container>
    </section>
  )
}

export default ContactSection
