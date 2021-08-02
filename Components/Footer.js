import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import {gsap} from "gsap";

import SwiperCore, { Navigation,Parallax,EffectCube ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation ,Parallax,Autoplay, EffectCube,Mousewheel, Pagination, Scrollbar, A11y]);

function Footer() {
    let up=useRef(null)
    let u = gsap.timeline({repeat:-1});
    useEffect(()=>{
        u.fromTo(up,.5, {y:25},{y:-2})
         .fromTo(up,.2, {y:-2},{y:25})
        
    
        
        },[])
    const refreshPage = ()=>{
       
        
        window.location.reload()
     }
    
    return (
        <div className={styles.container}>
            <Swiper className={styles.quotecontainer} id="swiper"
           
            spaceBetween={0}
            slidesPerView={1}
            cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
              }}        
            direction={'vertical'}
            scrollbar={
            { draggable: true },
            {dragSize:5},
            {hide: false}
            }
            autoplay={{
            "delay": 4000,
            "disableOnInteraction": false
            }}
            parallax={true}
            loop={true}
            speed={1000}
            >
                <SwiperSlide>
                    <h1 className={styles.quote}>randomquote 1</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className={styles.quote}>randomquote 2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className={styles.quote}>randomquote 3</h1>
                </SwiperSlide>
            </Swiper>
            <div className={styles.gridcontainer}>
                <div className={styles.column}>
                    <h1 className={styles.title}>Some of my works</h1>
                    <ul >
                        
                            <li className={styles.item}>Tousist-guide</li>
                       
                        
                            <li className={styles.item}>Rashtrawaadi-Nepal</li>
                        
                        
                            <li className={styles.item}>Kundalam</li>
                       
                        
                            <li className={styles.item}>Frontend Ninja</li>
                        
                        
                    </ul>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.title}>What can I work with?</h1>
                    <ul >
                        
                            <li className={styles.item}>REACTJS</li>
                        
                        
                            <li className={styles.item}>NEXTJS </li>
                        
                        
                            <li className={styles.item}>HTML</li>
                        
                            <li className={styles.item}>CSS</li>
                        
                            <li className={styles.item}>TailwindCSS</li>
                        
                            <li className={styles.item}>GSAP</li>
                        
                            <li className={styles.item}>SwiperJS</li>
                        
                       
                            <li className={styles.item}>Typescript</li>
                      
                        
                    </ul>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.title}>Reach me on...</h1>
                    <ul >
                        
                            <li className={styles.item}>Rajkarnikarsalil11@gmail.com</li>
                        
                            <li className={styles.item}>+977-9841038513</li>
                        
                        
                        
                    </ul>
                    <ul className={styles.logocontainer}>
                        <Link href="https://www.facebook.com/S.Rajkarnikar11/">
                            <li   className={styles.logo}>
                                <Image  className={styles.logoimage} src="/assets/facebookw.svg" height="50" width="50" alt="facebook"/>
                            </li>
                        </Link>
                        <Link href="https://twitter.com/rajkarnikar11">
                            <li   className={styles.logo}>
                                <Image className={styles.logoimage} src="/assets/twitterw.svg" height="50" width="50" alt="twitter" />
                            </li>
                        </Link>
                        <Link href="https://np.linkedin.com/in/salil-rajkarnikar-93b649201">
                            <li   className={styles.logo}>
                                <Image className={styles.logoimage} src="/assets/linkedinw.svg" height="50" width="50"alt="linkedin" />
                            </li>
                        </Link>
                    </ul> 
                </div>
                <div  onClick={refreshPage} className={styles.totop}>
                    <div ref={el=>up=el}>    
                        <Image  src="/assets/arrowup.svg" height="20" alt="arrowup" width="20" />
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer
