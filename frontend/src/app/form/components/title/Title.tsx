'use client'
 
import { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import Vara from 'vara'

interface Props {
    setTitleDisplayed: React.Dispatch<React.SetStateAction<boolean>>
  }


export default function Title(props:Props) {
    const title = "Invitation Form"
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current || containerRef.current.children.length > 0) {
            return
        }
        const vara = new Vara(
            "#invitation-form-vara",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
            [
                {
                  text: title,
                  fontSize: 60,
                  strokeWidth:1,
                  duration:3000, 
                  textAlign: "center",
                  letterSpacing: 1
                }
              ]

        ).animationEnd(() => {
            props.setTitleDisplayed(true)
        })
    }, [])
    return (
        <>
        <div id="invitation-form-vara" ref={containerRef} style={{paddingTop: "30px"}}></div>
        </>
    )
}
