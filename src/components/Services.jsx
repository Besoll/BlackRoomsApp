import { features, features2 } from "../constants"
import styles, { layout } from "../style"

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimWhite`}>
        <img src={icon} alt="icon" className="w-[80%] h-[80%] object-contain"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
)
const FeatureCard2 = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features2.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimWhite`}>
        <img src={icon} alt="icon" className="w-[80%] h-[80%] object-contain"/>
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
)

const Services = () => {
    return (
        <section id="services" className={layout.section}>
            <div className={layout.sectionInfo}>
                {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features2.map((feature, index) => (
                <FeatureCard2 key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    ) 
}

export default Services