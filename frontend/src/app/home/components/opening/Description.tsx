
import { useEffect } from "react"

import styles from "./styles.module.css"


export default function Description()  {
    
    useEffect(() => {

    }, [])
    return (
        <p className={styles.description}>
            <span style={{animation: "fadeIn 0.5s"}}>A</span>
            <span style={{animation: "fadeIn 1.0s"}}>r</span>
            <span style={{animation: "fadeIn 1.5s"}}>e </span>
            <span style={{animation: "fadeIn 2.0s"}}>G</span>
            <span style={{animation: "fadeIn 2.5s"}}>e</span>
            <span style={{animation: "fadeIn 3.0s"}}>t</span>
            <span style={{animation: "fadeIn 3.5s"}}>t</span>
            <span style={{animation: "fadeIn 4.0s"}}>i</span>
            <span style={{animation: "fadeIn 4.5s"}}>n</span>
            <span style={{animation: "fadeIn 5.0s"}}>g</span>
            <span style={{animation: "fadeIn 5.5s"}}>M</span>
            <span style={{animation: "fadeIn 6.0s"}}>a</span>
            <span style={{animation: "fadeIn 6.5s"}}>r</span>
            <span style={{animation: "fadeIn 7.0s"}}>r</span>
            <span style={{animation: "fadeIn 7.5s"}}>i</span>
            <span style={{animation: "fadeIn 8.0s"}}>e</span>
            <span style={{animation: "fadeIn 8.5s"}}>d.</span>
        </p>
    )
}