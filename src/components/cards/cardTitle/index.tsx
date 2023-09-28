import styles from './index.module.css'
const CardTitle = ({ children }: { children: string }) => {
  return <h3 className={styles.title}>{children}</h3>
}

export default CardTitle
