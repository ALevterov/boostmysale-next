import Logo from '@/icons/Logo'
import styles from './index.module.css'
import GetBtn from '../getBtn'
import Arrow from '@/icons/Arrow'
import { useEffect, useRef } from 'react'
import Container from '../container'
import { handleClick } from '@/helpers/handleClick'
import Burger from '@/icons/Burger'
import MobileMenu from '../mobileMenu'
import { useState } from 'react'

const Header = () => {
  const ref = useRef<HTMLElement>(null)
  const [isOpened, setIsOpened] = useState(false)
  useEffect(() => {
    let offsetTop = window.innerWidth > 768 ? 100 : 42
    window.addEventListener('scroll', e => {
      if (window.scrollY > offsetTop) {
        ref.current?.classList.add(styles.fixed)
      }
      if (window.scrollY < offsetTop) {
        ref.current?.classList.remove(styles.fixed)
      }
    })
  }, [])
  useEffect(() => {
    const html = document.querySelector('html')
    if (isOpened) {
      html?.classList.add('lock')
    }
    if (!isOpened) {
      html?.classList.remove('lock')
    }
  }, [isOpened])

  return (
    <>
      <header className={styles.header} ref={ref}>
        <Container>
          <Logo />
          <nav>
            <ul className={styles.navList}>
              <li onClick={handleClick}>
                <a data-href='about'>about</a>
              </li>
              <li onClick={handleClick}>
                <a data-href='services'>services</a>
              </li>
              <li onClick={handleClick}>
                <a data-href='reviews'>reviews</a>
              </li>
              <li onClick={handleClick}>
                <a data-href='cases'>cases</a>
              </li>
              <li onClick={handleClick}>
                <a data-href='contact-us'>contact us</a>
              </li>
            </ul>
          </nav>
          <GetBtn>
            GET FREE AUDIT <Arrow />
          </GetBtn>
          <div className={styles.burger} onClick={() => setIsOpened(true)}>
            <Burger />
          </div>
        </Container>
      </header>
      <MobileMenu isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  )
}

export default Header
