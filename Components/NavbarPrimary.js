import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import {gsap,Power3} from "gsap";
import styles from '../styles/navbar.module.css'

function Navbar() {

    let head=useRef(null)
    var tl = gsap.timeline();
    var t2 = gsap.timeline();
    
    useEffect(()=>{
        tl.fromTo(head,.2, {y:-700,rotation:0},{y:50,rotation:0})
        .to(head,.2, {y:-10,rotation:0})
        .to(head,.1, {rotation:-10 ,y:0})
        .to(head,.2, {rotation:-5})
        .to(head,.1, {rotation:-10})
        .to(head,.13, {rotation:-8})
        .to(head,.1, {rotation:-10})
        .to(head,.1, {rotation:-9})
        .to(head,.07, {rotation:-10})
    
        
        },[])
        function straight(){
            gsap.to(head,.2, {rotation:0})

        }
        function back(){
            t2.to(head,.13, {rotation:-10})
            .to(head,.2, {rotation:-5})
            .to(head,.1, {rotation:-10})
            .to(head,.13, {rotation:-8})
            .to(head,.1, {rotation:-10})
            .to(head,.1, {rotation:-9})
            .to(head,.07, {rotation:-10})

        }
    return (
        <div className={styles.container} >
            <div   className={styles.logo}>
                <Link href="/">
                    <p className={styles.text} onMouseEnter={straight} onMouseLeave={back} ref={el=>head=el}> RAJKARNIKAR</p>
                </Link>
            </div>
            <div className={styles.linebot} />
            
           
           
        </div>
    )
}

export default Navbar
