import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Boost Your Business with <br className="sm:block hidden" />
        Content Marketing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our Content Marketing service helps you create and distribute engaging content that resonates with your target audience, 
      boosting your business growth. We work with you to develop a strategy that aligns with your brand messaging and goals. 
      Our team of writers, editors, and designers create content like blog posts, social media updates, and infographics. 
      Establish your brand as a thought leader, build trust with your customers, and drive traffic to your website.
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal