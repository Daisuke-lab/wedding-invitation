import { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import { isPC } from '@/utils/AgentUtil'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import sleep from '@/utils/SleepUtil';

interface Props {
    setTitleDisplayed: React.Dispatch<React.SetStateAction<boolean>>
  }


export default function Title(props:Props)  {
    const {setTitleDisplayed} = props
    const [textAlignLast, setTextAlignLast] = useState<"right" | "center" | null>(null)
    useEffect(() => {
        setTextAlignLast(isPC()?"right":"center")
        handleFlag()
    }, [])
    

    const handleFlag = async () => {
        await sleep(1500);
        setTitleDisplayed(true)
      };
    
    return (
        <>
        {textAlignLast?(<>
            <span style={{width: "350px", textAlignLast: textAlignLast}}>
                    <span>D</span>
                    <span>U</span>
                    <span>N</span>
                    <span>G</span>
                </span>
                <span>
                    <span>&</span>
                </span>
                <span  id="daisuke" style={{width: "350px"}}>
                    <span>D</span>
                    <span>A</span>
                    <span>I</span>
                    <span>S</span>
                    <span>U</span>
                    <span>K</span>
                    <span>E</span>
                </span>
        </>):(<></>)}        
        </>
    )
}