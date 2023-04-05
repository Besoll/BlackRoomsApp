import styles from "./style";
import { 
  Navbar, 
  AboutUs, 
  ServiceFirst, 
  CardDeal, 
  Services, 
  ServicesHeader, 
  Clients, 
  CTA, 
  Stats, 
  Footer, 
  Testimonials, 
  Hero,
  Hero2,
} from "./components";

import ImageSlider from "./components/ImageSlider";


const App = () => (
  <div className="bg-black w-full overflow-hidden">
    
    
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className="app-container">
      <ImageSlider />
      <Hero2 />
    </div>
    
    

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <ServicesHeader />
        <Services />
        <ServiceFirst />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <AboutUs />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;