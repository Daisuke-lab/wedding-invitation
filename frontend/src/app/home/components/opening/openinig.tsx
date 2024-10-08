'use client'
 
import { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { isPC } from '@/utils/AgentUtil'
import Title from './Title'
import Description from './Description'
import LanguageSetting from './LanguageSetting'


export default function Opening() {
    const [titleDisplayed, setTitleDisplayed] = useState<boolean>(false)

    return (
        <div className={styles.background}>
        <LanguageSetting/>
        <div className="flex flex-col items-center justify-center ">
            <div className={styles.blankContent}></div>
            <div className={`flex items-center justify-center ${styles.title}`} style={{width: "80%"}}>
                <Title setTitleDisplayed={setTitleDisplayed}/>
            </div>
            {titleDisplayed?(<Description/>):(<></>)}
        </div>
        </div>
    )
}
