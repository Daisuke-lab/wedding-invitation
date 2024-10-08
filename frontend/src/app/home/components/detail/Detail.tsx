'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Map from "./Map"
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';
import WeddingTimeline from './WeddingTimeline'


export default function Detail() {

    return (
        <div className={styles.container}>
            <ScrollAnimation animateIn='fadeIn'>
            <h1 className={styles.title}>The Wedding Day</h1>
            </ScrollAnimation>
            <div className="flex items-center justify-around item-center flex-wrap" style={{minWidth: "-webkit-fill-available"}}>
            <div className={styles.mapContainer}><Map/></div>
            <div className={styles.description}>
                <WeddingTimeline/>

            </div>
            </div>
        </div>
    )
}