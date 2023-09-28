import styles from './index.module.css'
import ErrorIcon from '@/icons/error'
export default function ErrorMessage() {
	return <div className={styles.container}>
		<ErrorIcon />
		<div>An error has occurred.</div>
		<div>Retry later.</div>
	</div>
}