import styles, { layout } from "../style"



const ServicesHeader = () => { 
    return ( 
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[65px] text-white ss:leading-[100px] leading-[75px]">
                <span className="bg-gradient-to-r from-white text-black">Our Services:</span>
                </h2>
                {/* <Button styles="mt-10" /> */}
            </div>
            <div className={layout.sectionImg}>
                {/* <h2 className={styles.heading2}>
                Catch Your Light Spot, <br className="sm:block hidden" />
                at Black Rooms Services.
                </h2> */}
                <p className={`${styles.paragraph} max-w-[470px] sm:mt-0 mt-5`}>
                Our full-service marketing agency offers comprehensive solutions including market research, 
                user experience research, branding and positioning, web and mobile app development, social media management, 
                Google Ads, SEO, email marketing, content creation and optimization, 
                to help businesses succeed in today's competitive landscape.
                </p>
                <h2 className="font-poppins font-semibold ss:text-[48px] text-[40px] text-white ss:leading-[60px] leading-[45px]">
                    <span className="bg-gradient-to-r from-white text-black">CATCH YOUR <br className="sm:block hidden" /> {" "} SPOT LIGHT</span>
                </h2>
                
            </div>

        

        </section>
    )
}


export default ServicesHeader