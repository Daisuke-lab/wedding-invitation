'use client'
 
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Vara from 'vara'
import { isPC } from '@/utils/AgentUtil'


interface Props {
    setTitleDisplayed: React.Dispatch<React.SetStateAction<boolean>>
  }


export default function Title(props:Props) {
    const title = "Thank you"
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const fontSize = isPC()?  100 : 70
        if (!containerRef.current || containerRef.current.children.length > 0) {
            return
        }
        const vara = new Vara(
            "#invitation-form-vara",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json",
            [
                {
                  text: title,
                  fontSize: fontSize,
                  strokeWidth:2,
                  duration:2000, 
                  textAlign: "center",
                  letterSpacing: 1,
                  color: "white"
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
