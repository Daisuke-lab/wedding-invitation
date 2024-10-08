'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Slider from './Slider'
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

export default function Introduction() {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.container}>
            <div className="flex flex-col items-center justify-evenly  items-center" style={{minHeight: "inherit"}}>
            <ScrollAnimation animateIn='fadeIn'>
            <h1 className={styles.title}>Cưới Anh Đi!</h1>
            </ScrollAnimation>
            <p className={styles.description}>
            {t("greeting_message")}
            </p>
            <Slider/>
            </div>
        </div>
    )
}


