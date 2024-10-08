"use client"

import { isPC } from '@/utils/AgentUtil';
import React, { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./styles.module.css"

// import pcImage1 from "../../../../../public/home/pc/491A2785.JPG"
// import pcImage2 from "../../../../../public/home/pc/491A2705.JPG"
// import pcImage3 from "../../../../../public/home/pc/491A2936.JPG"
// import pcImage4 from "../../../../../public/home/pc/491A3026.JPG"
// import pcImage5 from "../../../../../public/home/pc/491A3296.JPG"

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
                "/home/sp/491A2627.jpg",
                "/home/sp/491A2853.jpg",
                "/home/sp/491A2975.jpg",
                "/home/sp/491A3184.jpg",
                "/home/sp/491A3470.jpg"
            ])
        }
    }, [])


    return (
        <>
        {(images.length > 0)?(
            <span className={styles.slider}>
           <SimpleImageSlider
            width="100%"
            height="800px"
            images={images}
            showBullets={false}
            showNavs={true}/> 
            </span>
        ):(<>/</>)}
        </>
    );
};
