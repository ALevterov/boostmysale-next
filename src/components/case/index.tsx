import styles from './index.module.css'
const Case = ({ title, index }: { title: string; index: number }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div
        className={styles.btn}
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent('open-popup', {
              bubbles: true,
              composed: true,
              detail: {
                index,
              },
            })
          )
        }}
      >
        view case
      </div>
    </div>
  )
}

export default Case
