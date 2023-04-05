import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 realtive z-[1]">
      <h1 className={styles.heading2} >What people are <br className="sm:block hidden"/> 
      about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        We offer a comprehensive and all-inclusive marketing service that covers everything 
        from strategy development to execution and analysis, ensuring that your business reaches its full potential.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials