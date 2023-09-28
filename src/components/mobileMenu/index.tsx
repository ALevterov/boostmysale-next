import Logo from '@/icons/Logo'
import Container from '../container'
import styles from './index.module.css'
import GetBtn from '../getBtn'
import Arrow from '@/icons/Arrow'
import BurgerCloseIcon from '@/icons/BurgerClose'
import { ContactInner } from '@/sections/ContactSection'
import clsx from 'clsx'
import { handleClick } from '@/helpers/handleClick'
const MobileMenu = ({
  isOpened,
  setIsOpened,
}: {
  isOpened: boolean
  setIsOpened: Function
}) => {
  const onLinkClick = (e: any) => {
    e.preventDefault()
    const href = e.target.dataset.href
    setIsOpened(false)
    setTimeout(() => {
      handleClick(href)
    }, 50)
  }
  return (
    <div
      className={clsx({
        [styles.menu]: true,
        [styles.closed]: !isOpened,
      })}
    >
      <Container>
        <div className={styles.container}>
          <div className={styles.header}>
            <Logo />
            <GetBtn onClick={onLinkClick}>
              GET FREE AUDIT <Arrow />
            </GetBtn>
            <div className={styles.close} onClick={() => setIsOpened(false)}>
              <BurgerCloseIcon />
            </div>
          </div>
          <h3 className={styles.h3}>MENU</h3>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a data-href='about' onClick={onLinkClick}>
                  about
                </a>
              </li>
              <li>
                <a data-href='services' onClick={onLinkClick}>
                  services
                </a>
              </li>
              <li>
                <a data-href='reviews' onClick={onLinkClick}>
                  reviews
                </a>
              </li>
              <li>
                <a data-href='cases' onClick={onLinkClick}>
                  cases
                </a>
              </li>
              <li>
                <a data-href='contact-us' onClick={onLinkClick}>
                  contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.bottom}>
            <ContactInner onLinkClick={onLinkClick} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MobileMenu
