import React, { useRef  } from 'react';
import {gsap} from "gsap";
import styles from '../styles/worksmall.module.css'
import Card from './Card';

import SwiperCore, { Navigation,Parallax,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image1 from '../public/images/tourist.png'
import Image2 from '../public/images/rashtra.png'
import Kundalam from '../public/images/kundalam.png'
import Ninja from '../public/images/ninja.png'


SwiperCore.use([Navigation ,Parallax,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);


function WorkSmall() {
    
    
    let head=useRef(null);
       let sc=gsap.timeline()
    
    
    function up(){
        gsap.to(head,.3,{y:-20})
    }
    function down(){
        timeLine.to(head,.1,{y:0})
                .to(head,.15,{y:-10})
                .to(head,.1,{y:0})
                .to(head,.1,{y:-3})
                .to(head,.05,{y:0})
                .to(head,.05,{y:-1})
                .to(head,.02,{y:0})
    }
    
     
      
    
    return (
        <div id="" className={styles.container}>
            
            <div   className={styles.titlecontainer} >                
                <h1  ref={el=>head=el} onMouseEnter={up} onMouseLeave={down} className={styles.title}>
                    WORK
                </h1>
                <div className={styles.titleline} />                 
            </div>
            <Swiper className={styles.slidercontainer}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }}
                loop={true}
                pagination={{
                    "dynamicBullets": true,
                    "clickable":true
                  }}
                        
                >
                    <SwiperSlide className={styles.slider}>
                            <Card 
                                title="TOURIST-GUIDE" 
                                description="TOURIST-GUIDE is a travell recomendation app with which travellers will be able to get response to their queries and also get the facilities and information anytime and anywhere."
                                image={Image1}
                                link="https://github.com/randazzle/NewMinorProjectDjango/"
                            />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slider}>
                        <Card 
                            title="RASHTRAWAADI-NEPAL" 
                            description="RASHTRAWAADI-NEPAL is a website to a political organization that helps raise awareness and recruit new members to the organization"
                            image={Image2}
                            link="https://github.com/rajkarnikar11/Rashtrawaadi-Nepal/"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide className={styles.slider}>
                        <Card 
                            title="FRONTEND NINJA" 
                            description="FRONTEND NINJA is a vaccancy announcemnt website that is looking for new and skilled frontend developers"
                            image={Ninja}
                            link="https://bitbucket.org/rajkarnikar/yipl-frontend-challenge/src/master/"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slider}>
                        <Card 
                            title="TOURIST-GUIDE" 
                            description="TOURIST-GUIDE is a travell recomendation app with which travellers will be able to get response to their queries and also get the facilities and information anytime and anywhere."
                            image={Image1}
                            link="https://github.com/rajkarnikar11/Minor-project"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slider}>
                        <Card 
                            title="KUNDALAM" 
                            description="KUNDALAM is an ecommerce site that sells womens accesories"
                            image={Kundalam}
                            link="https://gitlab.com/kundalam-nepal/kundalam-client-poc/-/tree/salil"
                        />
                    </SwiperSlide>
                   <div className={styles.hidden}/>
             </Swiper>
            
        </div>
    )
}

export default WorkSmall
