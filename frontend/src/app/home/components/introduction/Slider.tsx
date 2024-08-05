"use client"

import { isPC } from '@/utils/AgentUtil';
import React, { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./styles.module.css"

export default function Slider()  {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        if (isPC()) {
            setImages([
                "/home/pc/491A2785.JPG",
                "/home/pc/491A2705.JPG",
                "/home/pc/491A2936.JPG",
                "/home/pc/491A3026.JPG",
                "/home/pc/491A3296.JPG"
            ])
        } else {
            setImages([
                "/home/sp/491A2627.JPG",
                "/home/sp/491A2853.JPG",
                "/home/sp/491A2978.JPG",
                "/home/sp/491A3184.JPG",
                "/home/sp/491A3470.JPG"
            ])
        }
    }, [])


    return (
        <>
        {(images.length > 0)?(
            <span className={styles.slider}>
           <SimpleImageSlider
            width="80%"
            height="600px"
            images={images}
            showBullets={false}
            showNavs={true}/> 
            </span>
        ):(<>/</>)}
        </>
    );
};
