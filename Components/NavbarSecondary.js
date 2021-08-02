import React, { useState,useRef, useEffect } from 'react';
import {gsap,Power3} from "gsap";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/navbarSecondary.module.css'

function NavbarSecondary() {
    const [dropDown, setDropDown] = useState(false);
    let links1=useRef(null)
    let links2=useRef(null)
    let links3=useRef(null)
    let links4=useRef(null)
    let links5=useRef(null)


    let side= useRef(null);
    let side1= useRef(null);
    let side2= useRef(null);
    let side3= useRef(null);
    let side4= useRef(null);
    let side5= useRef(null);

    const expand =()=>{
        
        gsap.timeline().fromTo(side1,.2, {y:-500,css:{visibility:"visible"}} ,{y:700 } )
        gsap.timeline().fromTo(side2,.2, {y:-700,css:{visibility:"visible"}, delay:.1},{y:700,delay:.1} )
        gsap.timeline() .fromTo(side3,.2, {y:-700,css:{visibility:"visible"}, delay:.2},{y:700,delay:.2} )
        gsap.timeline() .fromTo(side4,.2, {y:-700,css:{visibility:"visible"},delay:.3},{y:700,delay:.3} )
        gsap.timeline() .fromTo(side5,.2, {y:-700,css:{visibility:"visible"},delay:.4},{y:700,delay:.4} )

        
        setDropDown(true);              
    
    }
    const shrink =()=>{
        gsap.to(side5,.2, {y:-700, ease:Power3.easeInOut} )
        gsap.to(side4,.2, {y:-700,delay:.1, ease:Power3.easeInOut} )
        gsap.to(side3,.2, {y:-700,delay:.2, ease:Power3.easeInOut} )
        gsap.to(side2,.2, {y:-700,delay:.3, ease:Power3.easeInOut} )
        gsap.to(side1,.2, {y:-700,delay:.4, ease:Power3.easeInOut} )
         

        setDropDown(false);
    
    }

    useEffect(()=>{
        gsap.timeline().to(side,0, {y:-700,}  );
        gsap.timeline().fromTo(links1,.5, {opacity:0,visibility:"visible"},{opacity:1,delay:.25})
        gsap.timeline().fromTo(links2,.5, {opacity:0,visibility:"visible"},{opacity:1,delay:.5})
        gsap.timeline().fromTo(links3,.5, {opacity:0,visibility:"visible"},{opacity:1,delay:.75})
        gsap.timeline().fromTo(links4,.5, {opacity:0,visibility:"visible"},{opacity:1,delay:1})
        gsap.timeline().fromTo(links5,.5, {opacity:0,visibility:"visible"},{opacity:1,delay:1.25})

    },[])
    
    return (
        <div>        
            <div className={styles.container}>
                {/* <div className={styles.line} /> */}
                <ul >
                    <li ref={el=>links1=el}  className={styles.navItems}><Link href="/">Home</Link></li>
                    <li ref={el=>links2=el}  className={styles.navItems}><Link href="/#skills">Skills</Link></li>
                    <li ref={el=>links3=el} className={styles.navItems}><Link href="#tools">Tools</Link></li>
                    <li ref={el=>links4=el} className={styles.navItems}><Link href="">Contact</Link></li>
                    <li ref={el=>links5=el} className={styles.navItems}><Link href="">Work</Link></li>
                </ul>
                <div className={styles.linebot} />
            </div>
            <div className={styles.dropdown}>
                <div  onClick={dropDown ==false ? expand : shrink}  className={styles.burger}>
                    <Image src="/assets/burger.svg" height="40" width="40" alt="burger" fill="rgb(177, 171, 171)" />
                </div >
                <ul ref={el=>side=el} className={styles.sidelinkContainer}>
                    <li ref={el=>side1=el} className={styles.sidelink}><Link href="/">Home</Link> </li>
                    <li ref={el=>side2=el} className={styles.sidelink}><Link href="#skills">Skills</Link></li>
                    <li ref={el=>side3=el} className={styles.sidelink}><Link href="#tools">Tools</Link></li>
                    <li ref={el=>side4=el} className={styles.sidelink}><Link href="">Contact</Link></li>
                    <li ref={el=>side5=el} className={styles.sidelink}><Link href="">Work</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarSecondary
