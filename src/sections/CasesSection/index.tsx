import Container from '@/components/container'
import styles from './index.module.css'
import Title from '@/components/title'
import Case from '@/components/case'
const CasesSection = () => {
  return (
    <section id='cases' className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <Title className={styles.title}>Cases</Title>
          <div className={styles.casesContainer}>
            <Case key={0} index={0} title='Increase sales by 120%' />
            <Case key={1} index={1} title='Decrease ACOS to 8%' />
            <Case key={2} index={2} title='Increase sales by 320%' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CasesSection
