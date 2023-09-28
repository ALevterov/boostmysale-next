import ScrollableItem from '@/components/scrollableItem'
import styles from './index.module.css'
import Title from '@/components/title'
import { useEffect, useRef, useState } from 'react'
import Max from '@/assets/reviews/Max.webp'
import Alisa from '@/assets/reviews/Alisa.webp'
import Andrei from '@/assets/reviews/Andrei.webp'
import Pavel from '@/assets/reviews/Pavel.webp'
import Roman from '@/assets/reviews/Roman.webp'
import MaxMobile from '@/assets/reviews/mobile/Max.webp'
import AlisaMobile from '@/assets/reviews/mobile/Alisa.webp'
import AndreiMobile from '@/assets/reviews/mobile/Andrei.webp'
import PavelMobile from '@/assets/reviews/mobile/Pavel.webp'
import RomanMobile from '@/assets/reviews/mobile/Roman.webp'
import Container from '@/components/container'

function getCoords(elem: any): { top: number; left: number } {
  var box = elem.getBoundingClientRect()

  return {
    top: box.top + scrollY,
    left: box.left + scrollX,
  }
}

interface IItem {
  author: string
  children: string
}
interface IAuthor {
  name: string
  fam: string
  img: string
}
const items: IItem[] = [
  {
    author: 'Max Melnychenko',
    children: `Sincerely grateful to Nikolai for a quick and insightful assistance in launching Amazon OA sales. An excellent mentor, promptly adjusting training and practice. He provided everything possible to expedite the process. 100% compliance with agreements. A man of his word and an outstanding professional. Frankly, I don't understand how he manages to do it all.`,
  },
  {
    author: 'Alisa Nazarova',
    children:
      'Excellent start! It greatly helped in promoting our new brand. I will definitely be reaching out again.',
  },
  {
    author: 'Pavel Mirov',
    children:
      'We acquired an advertising and niche audit. Within a short period, we received competent and comprehensive information that proved to be extremely helpful. I highly recommend it to everyone.',
  },
  {
    author: 'Andrei Akmolinko',
    children:
      'Thank you for analyzing my situation - concise and to the point. I agree with everything. Turns out the problems were not where I initially thought they were.',
  },
  {
    author: 'Roman Tavrichenko',
    children:
      'Thank you for everything. We appreciate the excellent professional service and prompt resolution of the account issues.',
  },
]

const authorsDesc: IAuthor[] = [
  {
    fam: 'Melnychenko',
    name: 'Max',
    img: Max.src,
  },
  {
    fam: 'Nazarova',
    name: 'Alisa',
    img: Alisa.src,
  },
  {
    fam: 'Mirov',
    name: 'Pavel',
    img: Pavel.src,
  },
  {
    fam: 'Akmolinko',
    name: 'Andrei',
    img: Andrei.src,
  },
  {
    fam: 'Tavrichenko',
    name: 'Roman',
    img: Roman.src,
  },
]
const authorsMobile: IAuthor[] = [
  {
    fam: 'Melnychenko',
    name: 'Max',
    img: MaxMobile.src,
  },
  {
    fam: 'Nazarova',
    name: 'Alisa',
    img: AlisaMobile.src,
  },
  {
    fam: 'Mirov',
    name: 'Pavel',
    img: PavelMobile.src,
  },
  {
    fam: 'Akmolinko',
    name: 'Andrei',
    img: AndreiMobile.src,
  },
  {
    fam: 'Tavrichenko',
    name: 'Roman',
    img: RomanMobile.src,
  },
]
const ReviewsSection = () => {
	// const [cursorOnScrollableBlock, setCursorOnScrollableBlock] = useState(false);
	const [authors, setAuthors] = useState(authorsDesc)
  const sectionRef = useRef<HTMLElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [reviewIndex, setReviewIndex] = useState(0)
	
	const onScrollableBlockScroll = (e: any) => { 
		e.preventDefault()
		window.dispatchEvent(e)
	}
  useEffect(() => {
		if(window.innerWidth < 768)	
			setAuthors(authorsMobile)
		ref.current!.addEventListener('wheel', onScrollableBlockScroll, {passive: false})
    let { top } = getCoords(sectionRef.current)
    const section = sectionRef.current!
    const scrollArea = ref.current!
    const scrollHeight = scrollArea.scrollHeight
    const divHeight = divRef.current!.clientHeight
		let offset = 400
		if(window.innerWidth < 768) {
			offset = 500
		} else {
			top += 200
		}
    section.style.height = divHeight + scrollHeight + offset + 'px'
		const myWindow: any = window
    window.addEventListener('scroll', () => {
			if(myWindow._stopStupidBrowsersBehavior)
				return 
      const diff = window.scrollY - top
      if (window.scrollY > top) {
        ref.current!.scrollTop = diff
      }
			if (window.scrollY < top) {
        ref.current!.scrollTop = 0
      }
    })
    const listener = (e: any) => {
      setReviewIndex(e.detail.index)
    }
    window.addEventListener('item-in-view', listener)
  }, [])
  return (
    <section ref={sectionRef} className={styles.section} id='reviews'>
      <div ref={divRef}>
        <Container>
          <Title className={styles.title}>Reviews</Title>
          <div className={styles.container} ref={containerRef}>
            <div className={styles.photos}>
              {authors[reviewIndex].img && (
                <img src={authors[reviewIndex].img} alt='Max' />
              )}
              <div className={styles.photosAuthor}>
                <div className={styles.photosName}>
                  {authors[reviewIndex].name}
                </div>
                <div className={styles.photosFam}>
                  {authors[reviewIndex].fam}
                </div>
              </div>
            </div>
            <div
              className={styles.scrollableArea}
              id='scrollable-area'
              ref={ref}
							// onMouseEnter={() => {
							// 	console.log("mouseEnter");
							// 	setCursorOnScrollableBlock(true)
							// }}
							// onMouseLeave={() => {
							// 	console.log("mouseleave");
							// 	setCursorOnScrollableBlock(false)
							// }}
            >
              {items.map((item, index) => {
                const { author, children } = item
                return (
                  <ScrollableItem
                    key={author}
                    author={author}
                    index={index + 1}
                  >
                    {children}
                  </ScrollableItem>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default ReviewsSection
