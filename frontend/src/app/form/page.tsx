'use client'

import { Button, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from "./styles.module.css"
import { brown, pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/themes/WeddingTheme";
import SubmitButton from "./components/submitButton/SubmitButton";
import Title from "./components/title/Title";
import { useEffect, useState } from "react";
import sleep from "@/utils/SleepUtil";
import {Animated} from "react-animated-css";
import getAxios from "@/utils/APIUtil";
import { useRouter } from 'next/navigation'




type Inputs = {
  name: string
  attending: boolean,
  hotel_needed: boolean
  message: string

}



export default function WeddingForm() {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const router = useRouter()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
        const axios = getAxios()
        const res = await axios.post("/api/v1/invitation/", data)
        console.log(res)
        router.push(`/thankyou`)
      } catch(err) {
          console.log(err)
      }
    }
    const [titleDisplayed, setTitleDisplayed] = useState<boolean>(false)

    
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className={`${styles.background}`}>
      <Title setTitleDisplayed={setTitleDisplayed}/>
      {titleDisplayed?(<>
        <Animated animationIn="fadeIn" isVisible={true}>
        <form onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col items-center justify-around item-center"
      style={{minHeight: "inherit"}}>
        <div className={`flex flex-col items-center justify-around item-center ${styles.inputContainer}`}>
          <TextField label="お名前" variant="standard" color="pink" fullWidth  {...register("name")}/>
            <RadioGroup row  {...register("attending")}>
              <FormControlLabel value="true" control={<Radio color="pink"/>} label="参加する。" />
              <FormControlLabel value="false" control={<Radio color="pink"/>} label="参加しない。" />
            </RadioGroup>
            <RadioGroup row {...register("hotel_needed")}>
              <FormControlLabel value="true" control={<Radio color="pink"/>} label="前日ホテル必要。" />
              <FormControlLabel value="false" control={<Radio color="pink"/>} label="前日ホテル不要。" />
            </RadioGroup>
            <TextField
             fullWidth
                color="pink"
                label="メッセージ"
                placeholder="ここに入力してください。"
                multiline
                {...register("message")}
                minRows={3}/>
          </div>
          <div  className={`flex flex-col items-center justify-around item-center`}>
            <SubmitButton/>
          </div>
      </form>
      </Animated>
      </>):(<></>)}
    </div>
    </ThemeProvider>
    </>
  );
}