
import HeroSection from '../Components/HeroSection'
import styles from '../styles/Index.module.css'

import NavbarPrimary from '../Components/NavbarPrimary'


import SwiperCore, { Navigation,Parallax,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '../Components/Skills'
import Tools from '../Components/Tools'
import Footer from '../Components/Footer'
import Contact from '../Components/contact'
import Work from '../Components/Work'
import Workmedium from '../Components/WorkMedium'
import Worksmall from '../Components/WorkSmall'


SwiperCore.use([Navigation ,Parallax,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
   
    <div className={styles.container}>
      
      <NavbarPrimary/>
    
      <div className={styles.swiper}>
        <Swiper id="swiper"
        effect="coverflow"
        spaceBetween={0}
        slidesPerView={1}
        
       
        direction={'vertical'}
        scrollbar={{ draggable: true }}
        autoplay={{
          "delay": 12000,
          "disableOnInteraction": false
          }}
        parallax={true}
        speed={1000}
        pagination={{"type":"progressbar",
        progressbarOpposite:true,
        }}
        mousewheel={true}
        className="swiper-pagination-black"
        >
        <SwiperSlide>
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
          <Work />
          <Workmedium/>
          <Worksmall/>
        </SwiperSlide> 
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Tools />
        </SwiperSlide>   
        <SwiperSlide>
          <Contact />
        </SwiperSlide>  
        
        <SwiperSlide>
          <Footer />
        </SwiperSlide> 
      </Swiper>
      </div>
     
      
    </div>
  )
}
