import React from 'react'
import styles from "./styles.module.css"
type Props = {
    innerNumber: number
    label: string
}

export default function Circle({innerNumber, label}: Props) {
  return (
    <div style={{alignContent: "center", textAlign: "center"}}>
    <div className={styles.circle}>
        {innerNumber}
    </div>
    <label>{label}</label>
    </div>
  )
}