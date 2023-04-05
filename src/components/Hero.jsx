import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Get 10%</span> off your {" "}
            <span className="text-gradient">first project</span> with us and experience the power of our {" "}
            <span className="text-white">marketing services</span>  
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[80px] leading-[65px]">
          Find Your Spotlight<br className="sm:block hidden" /> {" "}
            <span className="bg-gradient-to-r from-white text-gradient">in the Black Rooms</span> {" "} <br className="sm:block hidden" /> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> 
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-gradient ss:leading-[80px] leading-[65px] w-full">
        of Marketing! 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Get Noticed and Drive Sales Today! Unleash Your Brand's Potential with Our Proven Marketing Solutions. 
          Grow Your Online Presence and Boost Your Revenue with Our Marketing Experts. 
          Stand Out from the Competition with Our Innovative Marketing Strategies
        </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[auto] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexStart}`}>
        <GetStarted />
      </div>
    </section>
  )


export default Hero