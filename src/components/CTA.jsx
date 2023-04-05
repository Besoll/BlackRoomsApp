import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Let's try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> 
      Ready to take your business to the next level? Fill out the form below to get started with our 
      comprehensive marketing services. Our team of experts will guide you through the process and help 
      you achieve your business goals. 
      Don't wait, start your journey to success today!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)

export default CTA