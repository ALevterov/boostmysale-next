import styles from './index.module.css'
const CardText = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.text}>{children}</div>
}

export default CardText
