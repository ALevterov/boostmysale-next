import Container from '@/components/container'
import styles from './index.module.css'
import { handleClick } from '@/helpers/handleClick'
const FirstSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inscription}>
					<div>complex business solutions</div>
					<div>for <span>AMAZON SELLERS</span></div>
        </div>
        <div className={styles.centralText}>
          <div>GET READY TO BOOST</div>
          <div>YOUR AMAZON BUSINESS</div>
          <div className={styles.bold}>LIKE NEVER BEFORE</div>
        </div>
        <div className={styles.jaw}>
          with our comprehensive and full-scale business solutions
        </div>
        <div className={styles.phoneBlock}>
          <div className={styles.left}>BOOST YOUR SALES</div>
          <div className={styles.right}>
            <div
              className={styles.call}
              data-href='about'
              onClick={handleClick}
            >
              get a free consultation
            </div>
          </div>
        </div>
        <div className={styles.next}>
          <div className={styles.progress}></div>
          <div className={styles.text}>next</div>
        </div>
				<div className={styles.helper}></div>
      </Container>
    </section>
  )
}

export default FirstSection
