import Container from '@/components/container'
import styles from './index.module.css'
import Title from '@/components/title'
import Card1 from '@/components/cards/card1'
import SimpleCard from '@/components/cards/simpleCard'
import Card2 from '@/components/cards/card2'
import { useEffect, useState } from 'react'

const card1Videos = [
  require('../../assets/card1.webm'),
]
const card2Videos = [
  require('../../assets/card2.webm'),
]
const card3Videos = [
  require('../../assets/card3.webm'),
]
const card4Videos = [
  require('../../assets/card4.webm'),
]
const card1MobileVideos = [
  require('../../assets/card1.mp4'),
]
const card2MobileVideos = [
  require('../../assets/card2.mp4'),
]
const card3MobileVideos = [
  require('../../assets/card3.mp4'),
]
const card4MobileVideos = [
  require('../../assets/card4.mp4'),
]
const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])

  return (
    <section className={styles.section} id='services'>
      <Container>
        <Title className={styles.title}>OUR SERVICES</Title>

        <div className={styles.lastContainer}>
          <Card1
            title='LEGAL SERVICES'
            inscription='Protect Your Business, Ensure Compliance'
            videos={isMobile ? card4MobileVideos : card4Videos}
          >
            <> Our Legal Services team is here to safeguard your business and
            ensure compliance with Amazon$s policies and regulations. From <span>Amazon Account Suspention, Brand Protection</span>, and <span>Trademark Registration</span> to <span>Intellectual Property Rights</span> and <span>Policy Violations</span>, we provide expert guidance and assistance. With our comprehensive legal solutions, you can focus on
            growing your business with peace of mind, knowing that your
            operations are legally sound and protected.</>
          </Card1>
        </div>
        <Card1
          title='ACCOUNT AUDIT'
          videos={isMobile ? card1MobileVideos : card1Videos}
          inscription="Boost your Boost Your Account$s Potential"
        >
          <> Our team meticulously evaluates your account, identifying areas for
          improvement and highlighting untapped opportunities. From product
          listings to inventory management, pricing strategies to customer
          engagement, we leave no stone unturned in maximizing your
          account$s performance. Discover new pathways to success and boost your sales with our account auditing expertise.</>
        </Card1>
        <div className={styles.secondContainer}>
          <SimpleCard
            title='ACCOUNT MANAGEMENT'
            inscription='Boost the Path to Success'
          >
            <>Our Account Management services provide you with a dedicated team
            that takes care of every aspect of your Amazon account. From
            inventory monitoring and replenishment to customer service and
            feedback management, we ensure your account runs smoothly and
            efficiently. With our proactive approach and meticulous attention to
            detail, we help you stay ahead of the competition and achieve
            sustainable growth.</>
          </SimpleCard>
          <SimpleCard
            title='ENHANCED BRAND CONTENT'
            inscription='Boost Your Brand'
          >
            <>Stand out from the competition with the help of our team in creating a memorable brand experience. Drive conversions with captivating narratives and stunning visuals to tell more about your product. Our A+ content enhancement is truly valuable, allowing for customized images and written content.</>
          </SimpleCard>
          <SimpleCard
            title='PPC MANAGEMENT'
            inscription='Boost Your Advertising ROI'
          >
            <>Unlock the true potential of Amazon$s Pay-Per-Click (PPC)
            advertising platform with our expert PPC Management services. Our
            data-driven strategies and cutting-edge optimization techniques
            ensure that your advertising campaigns deliver maximum return on
            investment. From keyword research and ad copy creation to bid
            management and campaign analysis, we fine-tune every element to
            drive targeted traffic, increase conversions, and boost your bottom
            line.</>
          </SimpleCard>
        </div>
        <div className={styles.thirdContainer}>
          <Card2
            title='START A BUSINESS ON AMAZON'
						inscription='Jumpstart Your Amazon Journey'
            videos={isMobile ? card2MobileVideos : card2Videos}
            videoClass={styles.video2}
          >
            <>Are you considering creating your own business on Amazon and don$t know
            where to start? We$re here to guide you step by step guide you step by step through every aspect of market research, market research, competitor analysis to marketing strategy development, account
            registration, listing creation and optimization, pricing and
            advertising management.</>
          </Card2>
          <SimpleCard
            title='LISTING CREATION AND OPTIMIZATION'
            inscription='Captivate Buyers, Boost Sales'
            white={true}
          >
            <>Capture the attention of potential buyers and drive sales with our
            expert Listing Creation and Optimization services. We create
            compelling product listings that resonate with your target audience.
            Leveraging market research and keyword analysis, we optimize your
            listings to enhance visibility, improve search rankings, and
            increase conversions. From captivating product descriptions to
            eye-catching images, we create listings that leave a lasting
            impression, driving higher sales and revenue for your business.</>
          </SimpleCard>
        </div>
        <div className={styles.fourthContainer}>
          {isMobile ? (
            <Card1
              title='LOGISTICS AND INSPECTION'
              inscription='Streamline Your Supply Chain'
              videos={card3MobileVideos}
            >
              <>Efficient logistics and quality control are essential for
              successful Amazon sellers. Our Logistics and Inspections services
              streamline your supply chain, ensuring smooth operations and
              high-quality products. We collaborate with trusted partners in
              China to facilitate sourcing, shipping, and customs clearance,
              while our rigorous inspections guarantee product integrity and
              compliance. From factory audits to product quality checks, we
              leave no room for compromise, ensuring that your customers receive
              exceptional products while optimizing your time and resources.</>
            </Card1>
          ) : (
            <Card2
              title='LOGISTICS AND INSPECTION'
              inscription='Streamline Your Supply Chain'
              videos={card3Videos}
              videoClass={styles.video3}
            >
              <>Efficient logistics and quality control are essential for
              successful Amazon sellers. Our Logistics and Inspections services
              streamline your supply chain, ensuring smooth operations and
              high-quality products. We collaborate with trusted partners in
              China to facilitate sourcing, shipping, and customs clearance,
              while our rigorous inspections guarantee product integrity and
              compliance. From factory audits to product quality checks, we
              leave no room for compromise, ensuring that your customers receive
              exceptional products while optimizing your time and resources.</>
            </Card2>
          )}
          <SimpleCard
            title='DIGITAL MARKETING'
            inscription='Boost Your Brand$s Online Presence'
          >
            <>In today$s digital landscape, a robust online presence is
            crucial for success. Our Digital Marketing services empower your
            brand to stand out. Through a tailored combination of search engine
            optimization (SEO), social media marketing, influencer
            collaborations, and content creation, we create a holistic digital
            marketing strategy that enhances brand visibility, drives organic
            traffic, and cultivates a loyal customer base.</>
          </SimpleCard>
        </div>
      </Container>
    </section>
  )
}

export default ServiceSection
