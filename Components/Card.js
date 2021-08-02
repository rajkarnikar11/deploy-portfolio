
import React, { useRef} from 'react';
import styles from '../styles/card.module.css'
import Image from 'next/dist/client/image';
import Link from 'next/link'
import {gsap} from "gsap";



function Card(props) {
    
    
    
    
    let arrow=useRef(null);
    function enter(){
        gsap.timeline({repeat:-1}).fromTo(arrow,1,{x:10},{x:50})
                                  .to(arrow,.25,{x:10})
    }
    
    return (
        <div  onMouseEnter={enter}>

            <Link href={props.link}>
                <div  onMouseEnter={enter} className={styles.container}>
                    <div className={styles.title}>
                        <h1>
                            {props.title}
                        </h1>
                        <div className={styles.seperator}/>
                    </div>
                    <div className={styles.imagecontainer}>
                        <div className={styles.image}>
                            <Image className={styles.image} alt="projects" src={props.image} />
                        </div>
                    </div>
                    <div className={styles.seperatordown}/> 
                    <div className={styles.description}>
                        <p1>
                            {props.description}
                        </p1>
                    </div>
                    <div className={styles.overlay}>
                        <h1>
                            VIEW LINK
                        </h1>
                        <div ref={el=>arrow=el} className={styles.arrowcontainer}>
                            <Image className={styles.arrow} height="40" width="30" alt="arrow"  src="/assets/arrow.svg" />
                        </div>
                    </div>
                </div>
                </Link>
        </div>
    )

}
export default Card
