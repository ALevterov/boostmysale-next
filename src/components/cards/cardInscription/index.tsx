import styles from './index.module.css'
const CardInscription = ({ children }: { children: string }) => {
  return <div className={styles.inscription}>{children}</div>
}

export default CardInscription
