import React, { useRef } from 'react';
import {gsap} from "gsap";
import styles from '../styles/contact.module.css'
import Image from 'next/dist/client/image';
import Link from 'next/link'

function Contact() {
    
    let head=useRef(null);
    let fb=useRef(null);
    let tw=useRef(null);
    let li=useRef(null);
    let timeLine=gsap.timeline()
    let timeLine1=gsap.timeline()
    let timeLine2=gsap.timeline()
    
    
    
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
    function upfb(){
        gsap.to(fb,.3,{y:-20})
    }
    function downfb(){
        timeLine.to(fb,.1,{y:0,})
                .to(fb,.15,{y:-10})
                .to(fb,.1,{y:0})
                .to(fb,.1,{y:-3})
                .to(fb,.05,{y:0})
                .to(fb,.05,{y:-1})
                .to(fb,.02,{y:0})
    }
    function upli(){
        gsap.to(li,.3,{y:-20})
    }
    function downli(){
        timeLine1.to(li,.1,{y:0,})
                .to(li,.15,{y:-10})
                .to(li,.1,{y:0})
                .to(li,.1,{y:-3})
                .to(li,.05,{y:0})
                .to(li,.05,{y:-1})
                .to(li,.02,{y:0})
    }
    function uptw(){
        gsap.to(tw,.3,{y:-20})
    }
    function downtw(){
        timeLine2.to(tw,.1,{y:0,})
                .to(tw,.15,{y:-10})
                .to(tw,.1,{y:0})
                .to(tw,.1,{y:-3})
                .to(tw,.05,{y:0})
                .to(tw,.05,{y:-1})
                .to(tw,.02,{y:0})
    }
    
        
      
    
    return (
        <div id="" className="styles.container">
            
            <div   className={styles.titlecontainer} >                
                <h1  ref={el=>head=el} onMouseEnter={up} onMouseLeave={down} className={styles.title}>
                    CONTACT
                </h1>
                <div className={styles.titleline} />                 
            </div>
           
            <ul className={styles.logocontainer}>
                <Link href="https://www.facebook.com/S.Rajkarnikar11/">
                    <li  ref={el=>fb=el} onMouseOver={upfb} onMouseLeave={downfb} className={styles.logo}>
                        <Image  className={styles.logoimage} src="/assets/facebook.svg" height="50" width="50" alt="facebook" />
                    </li>
                </Link>
                <Link href="https://twitter.com/rajkarnikar11">
                    <li ref={el=>tw=el}  onMouseOver={uptw} onMouseLeave={downtw} className={styles.logo}>
                        <Image className={styles.logoimage} src="/assets/twitter.svg" height="50" width="50"  alt="twitter"  />
                    </li>
                </Link>
                <Link href="https://np.linkedin.com/in/salil-rajkarnikar-93b649201">
                    <li ref={el=>li=el}  onMouseOver={upli} onMouseLeave={downli} className={styles.logo}>
                        <Image className={styles.logoimage} src="/assets/linkedin.svg" height="50" width="50"  alt="linkedin" />
                    </li>
                </Link>
            </ul> 
            <ul className={styles.infocontainer}>
                <li className={styles.inforow}>
                    <div  className={styles.infoitem}>
                        <Image  height="35" width="35" src="/assets/call.svg" alt="call" />
                    </div>
                    <div  className={styles.infoitem}>+977-9841038513</div>
                </li>
                <li className={styles.inforow}>
                    <div  className={styles.infoitem}>
                        <Image  height="35" width="35" src="/assets/email.svg" alt="email" />
                    </div>
                    <div  className={styles.infoitem}>Rajkarnikarsalil11@gmail.com</div>
                </li>
                <li className={styles.inforow}>
                    <div  className={styles.infoitem}>
                        <Image  height="35" width="35" src="/assets/home.svg" alt="home" />
                    </div>
                    <div  className={styles.infoitem}>Kathmandu,Nepal</div>
                </li>
            </ul>
        </div>
    )
}

export default Contact
