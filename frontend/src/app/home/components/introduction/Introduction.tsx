'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Slider from './Slider'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Introduction() {

    return (
        <div className={styles.container}>
            <div className="flex flex-col items-center justify-center  items-center" style={{minHeight: "inherit"}}>
            <ScrollAnimation animateIn='fadeIn'>
            <h1 className={styles.title}>Cưới Anh Đi!</h1>
            </ScrollAnimation>
            <p className={styles.description}>
            謹啓　大暑の候<br/>
            皆様におかれましては、ご健勝のこととお慶び申し上げます。<br/>
            さて、このたび<br/>
            Le Thi Dam Dung、菊地大介<br/>
            の婚約が相整い、結婚式を挙げることとなりました。
            </p>
            <Slider/>
            </div>
        </div>
    )
}


