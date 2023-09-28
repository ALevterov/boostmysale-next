import styles from '@/styles/Home.module.css'
import FirstSection from '../sections/FirstSection/index'
import ServiceSection from '@/sections/ServicesSection'
import ReviewsSection from '@/sections/ReviewsSection'
import CasesSection from '@/sections/CasesSection'
import Header from '@/components/header'
import FormSection from '@/sections/FormSection'
import ContactSection from '@/sections/ContactSection'
import Popup from '@/components/popup'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
		const script = document.createElement('script');
		script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-W4R39M38')`;
		document.body.prepend(script);
  }, [])
  return (
    <>
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        preload='none'
        playsInline
      >
        {!isMobile ? (
          <>
            <source src={require('../assets/main-bg-hq.mp4')} />
          </>
        ) : (
          <source src={require('../assets/main-bg-mobile.mp4')} />
        )}
      </video>
      <Header />
      <Popup />
      <div className={styles.content} id='content'>
          <FirstSection />
          <ServiceSection />
          <ReviewsSection />
          <CasesSection />
          <FormSection />
          <ContactSection />
      </div>
    </>
  )
}
