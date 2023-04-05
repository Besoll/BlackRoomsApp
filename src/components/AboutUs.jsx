import styles from "../style"
import Button from "./Button"

const AboutUs = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
  sm:flex-row flex-col`}>
    <div >
      <h2 className={styles.heading2}>
        Who We Are?
      </h2>
      <p className={`${styles.paragraph} mt-5 mb-5 sm:mb-10`}> 
        BLACK ROOMS Marketing Company is a dynamic and experienced marketing firm that offers a comprehensive 
        range of marketing services to help businesses succeed in today's competitive market. 
        With a focus on delivering exceptional results and a commitment to customer success, 
        BLACK ROOMS has built a reputation as one of the most respected marketing companies in the industry.
        <br /> <br />
        Our team of experienced marketing professionals has extensive experience in branding, positioning, 
        web development, e-commerce, mobile app development, social media marketing, 
        Facebook and Instagram advertising, Trip Advisor management, LinkedIn marketing, 
        SEO, email marketing, and content optimization. We have a proven track record of delivering great 
        results for our clients, and our portfolio is filled with successful projects that showcase 
        our expertise and commitment to quality.
      </p>
      <h2 className={styles.heading2}>
        What We Do?
      </h2>
      <p className={`${styles.paragraph}  sm:mt-0 mt-5`}> 
        At BLACK ROOMS, we understand that the marketing landscape is constantly evolving, and that businesses 
        need a partner who can help them navigate the challenges and opportunities of the digital age. 
        That's why we take a proactive, results-driven approach to marketing, leveraging the latest tools, 
        technologies, and best practices to help our clients succeed.
        <br /> <br />
        So, if you're looking for a marketing partner who can help you achieve your goals and drive real business 
        results, look no further than BLACK ROOMS Marketing Company. With our extensive experience, exceptional results, 
        and commitment to customer success, we're the perfect partner for businesses looking to succeed in today's 
        busy and competitive marketing landscape.
      </p>
    </div>
  </section>
)

export default AboutUs