"use client"
import { useTimer } from 'react-timer-hook';
import styles from "./styles.module.css"
import Title from "./components/title/Title"
import { useEffect, useState } from 'react';
import Circle from './components/circle/Circle';
import { Animated } from 'react-animated-css';
import { isPC } from '@/utils/AgentUtil';



export default function Thankyou() {
    const AnyAnimated = Animated as any
    const weddingDay = new Date("2024-09-29T10:30:00.000+07:00");
    const [titleDisplayed, setTitleDisplayed] = useState<boolean>(false)
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp: weddingDay, onExpire: () => console.warn('onExpire called') });

    return (
        <>
    <div className={`${styles.background}`}>
    </div>
    <div className={styles.title}>
        <Title setTitleDisplayed={setTitleDisplayed}/>
        <div className={styles.circleContainer}>
        {titleDisplayed?(<>
        <AnyAnimated animationIn="flipInY" isVisible={true} animationInDuration={2000}
        style={{animationFillMode: "backwards"}}>
            <Circle innerNumber={days} label="days"/>
        </AnyAnimated>
        <AnyAnimated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={500}
        style={{animationFillMode: "backwards"}}>
            <Circle innerNumber={hours} label="hours"/>
        </AnyAnimated>
        <AnyAnimated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={1000}
        style={{animationFillMode: "backwards"}}>
            <Circle innerNumber={minutes} label="minutes"/>
        </AnyAnimated>
        <AnyAnimated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={1500}
        style={{animationFillMode: "backwards"}} >
            <Circle innerNumber={seconds} label="seconds"/>
        </AnyAnimated>

            </>):<></>}
        </div>
        
    </div>
    </>
    )
}