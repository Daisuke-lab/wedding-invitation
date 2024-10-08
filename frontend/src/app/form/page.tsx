'use client'

import { Button, FormHelperText, FormLabel, TextField } from "@mui/material"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from "./styles.module.css"
import { brown, pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from "@/themes/WeddingTheme";
import SubmitButton from "./components/submitButton/SubmitButton";
import Title from "./components/title/Title";
import { useEffect, useRef, useState } from "react";
import sleep from "@/utils/SleepUtil";
import {Animated} from "react-animated-css";
import getAxios from "@/utils/APIUtil";
import { useRouter } from 'next/navigation'
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import FormControl from '@mui/material/FormControl';
import addAnimation from "./components/submitButton/ButtonAnimation";
import { useTranslation } from 'react-i18next';

type Inputs = {
  name: string
  attending: boolean,
  hotel_needed: boolean
  message: string

}



export default function WeddingForm() {
  const { t } = useTranslation();
  const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm<Inputs>()
    const router = useRouter()
    const buttonRef = useRef<HTMLButtonElement>(null);
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
        const axios = getAxios()
        const res = await axios.post("/api/v1/invitation/", data)
        console.log(res)
        if (buttonRef.current) {
          addAnimation(buttonRef.current)
          await sleep(1500)
        }
        router.push(`/thankyou`)
      } catch(err:any) {
          console.log(err)
          if (err?.response?.data?.message?.length > 0) {
            enqueueSnackbar(err?.response?.data?.message[0], { variant: "error" })
          } else {
            enqueueSnackbar(err?.response?.data?.message ?? t("form_server_unknown_error_message"), { variant: "error" })
          }
          
      }
    }
    const [titleDisplayed, setTitleDisplayed] = useState<boolean>(false)

    
  return (
    <>
    <SnackbarProvider>
    <ThemeProvider theme={theme}>
    <div className={`${styles.background}`}>
      <Title setTitleDisplayed={setTitleDisplayed}/>
      {titleDisplayed?(<>

        <form onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col items-center justify-around item-center"
      style={{minHeight: "inherit", animation: "fadeIn 0.5s"}}>
        <div className={`flex flex-col items-center justify-around item-center ${styles.inputContainer}`}>
          <FormControl error={errors.name?true:false} fullWidth={true}>
          <TextField label={t("form_name_label")} variant="standard" color="pink" fullWidth  {...register("name", {required: true})}/>
          <FormHelperText>{errors.name?t("form_required_error_messsage"):""}</FormHelperText>
          </FormControl>
          <FormControl error={errors.attending?true:false} fullWidth={true}>
          <Controller
              name="attending"
              control={control}
              rules={{required: true}}
              render={({ field }) => (
                <RadioGroup row  {...field}>
              <FormControlLabel value={true} control={<Radio color="pink"/>} label={t("form_attending_label")} />
              <FormControlLabel value={false} control={<Radio color="pink"/>} label={t("form_unattending_label")}/>
            </RadioGroup>
              )
            }
            />
            <FormHelperText>{errors.attending?t("form_required_error_messsage"):""}</FormHelperText>
            </FormControl>

            <FormControl error={errors.hotel_needed?true:false} fullWidth={true}>
            <FormLabel component="legend">{t("form_hotel_control_label")}</FormLabel>
            <Controller
              name="hotel_needed"
              control={control}
              rules={{required: true}}
              render={({ field }) => (
                <RadioGroup row {...field}>
              <FormControlLabel value={true} control={<Radio color="pink"/>} label={t("form_hotel_needed_label")} />
              <FormControlLabel value={false} control={<Radio color="pink"/>} label={t("form_hotel_unneeded_label")} />
            </RadioGroup>
              )
            }
            />
            <FormHelperText>{errors.hotel_needed?t("form_required_error_messsage"):""}</FormHelperText>
            </FormControl>
            
            <FormControl error={errors.message?true:false} fullWidth={true}>
            <TextField
             fullWidth
                color="pink"
                label={t("form_message_label")}
                placeholder={t("form_message_placeholder")}
                multiline
                {...register("message", {required: true})}
                minRows={3}/>
              <FormHelperText>{errors.message?t("form_required_error_messsage"):""}</FormHelperText>
            </FormControl>
          </div>
          <div  className={`flex flex-col items-center justify-around item-center`}>
            <SubmitButton buttonRef={buttonRef}/>
          </div>
      </form>
      </>):(<></>)}
    </div>
    </ThemeProvider>
    </SnackbarProvider>
    </>
  );
}