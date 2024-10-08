'use client'
 
import { RefObject, useRef, useState } from 'react'
import styles from "./styles.module.scss"
import { gsap } from 'gsap';
import addAnimation from './ButtonAnimation';
import { useTranslation } from 'react-i18next';

interface Props {
    buttonRef: RefObject<HTMLButtonElement>
}
export default function SubmitButton({buttonRef}:Props) {
    const { t } = useTranslation();
    return (
        <>
        <button className={styles.button} ref={buttonRef}>
            <span className={styles.default}>{t("form_submit_label")}</span>
            <span className={styles.success}>
                <svg viewBox="0 0 16 16">
                <polyline points="3.75 9 7 12 13 5"></polyline>
                </svg>{t("form_sent_mssage")}
            </span>
            <svg className={styles.trails} viewBox="0 0 33 64">
                <path d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"></path>
                <path d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"></path>
            </svg>
            <div className={styles.plane}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div>
        </button>
        
        </>
    )
}