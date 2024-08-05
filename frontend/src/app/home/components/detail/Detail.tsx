'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Map from "./Map"
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Detail() {

    return (
        <div className={styles.container}>
            <ScrollAnimation animateIn='fadeIn'>
            <h1 className={styles.title}>The Wedding Day</h1>
            </ScrollAnimation>
            <div className="flex items-center justify-around item-center flex-wrap" style={{minWidth: "-webkit-fill-available"}}>
            <div className={styles.mapContainer}><Map/></div>
            <div className={styles.description}>
                <h2 style={{fontSize: "larger"}}>日付</h2>
                <p>ホテル移動: 2024年 09月 28日 18:00</p>
                <p>結納式: 2024年 09月 29日 08:00 ~ 11:00</p>
                <p>結婚式・披露宴: 2024年 09月 29日 11:00 ~ 15:00</p>
                <h2 style={{fontSize: "larger"}}>場所</h2>
                <a href="https://hoanamhotel.com/" style={{textDecoration:"underline"}}>HÒA NAM HOTEL</a>
                <p >Đầu đê, Ứng Hòa, Hanoi 13800, Vietnam</p>
                {/* <Image src="/home/calendar.png" width={250} height={250} alt="calendar"/> */}
            </div>
            </div>
        </div>
    )
}