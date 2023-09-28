import SuccessIcon from '@/icons/success'
import styles from './index.module.css'
export default function SuccessMessage() {
	return <div className={styles.container}>
		<SuccessIcon />
		<div>Your message was succesefully delivered.</div>
		<div>We will contact you soon.</div>
	</div>
}