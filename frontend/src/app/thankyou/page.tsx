"use client"
import { useTimer } from 'react-timer-hook';
import styles from "./styles.module.css"
import Title from "./components/title/Title"
import { useState } from 'react';
import Circle from './components/circle/Circle';
import { Animated } from 'react-animated-css';
import { isPC } from '@/utils/AgentUtil';



export default function Thankyou() {
    const weddingDay = new Date(2024,9.29);
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
        <Animated animationIn="flipInY" isVisible={true} animationInDuration={2000}>
            <Circle innerNumber={days} label="days"/>
        </Animated>
        <Animated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={500}>
            <Circle innerNumber={hours} label="hours"/>
        </Animated>
        <Animated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={1000}>
            <Circle innerNumber={minutes} label="minutes"/>
        </Animated>
        <Animated animationIn="flipInY" isVisible={true} animationInDuration={2000} animationInDelay={1500}>
            <Circle innerNumber={seconds} label="seconds"/>
        </Animated>
            </>):<></>}
        </div>
        
    </div>
    </>
    )
}