'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';

export default function Registration() {
    return (
        <div className={styles.container}>
            <div className="flex flex-col items-center justify-around" style={{minHeight: "inherit"}}>
                    <p className={styles.description}>ご多用中、誠に恐縮ではございますが、<br/>
                    ご来臨の栄を賜りたく、謹んでご案内申し上げます。<br/>
                    尚、ご回答は以下のフォームより行っていただけると幸いでございます。</p>
             <Button color="brown" href="/form" className={styles.registrationButton} variant='contained'>
                回答する
             </Button>
            </div>
        </div>
    )
}
