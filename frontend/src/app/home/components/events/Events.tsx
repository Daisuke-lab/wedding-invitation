import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import MobileStepper from '@mui/material/MobileStepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import styles from "./styles.module.css"
import Event from './Event';
import { useTranslation } from 'react-i18next';





export default function Events() {
  const { t } = useTranslation();
  const events = [
    {
      title: t("pre_wedding_title"),
      imageUrl: "/thankyou/pc/491A3300.JPG",
      startDate: new Date(2024, 8, 29, 8, 30),
      endDate: new Date(2024, 8, 29, 10, 30),
      address: "Tư gia nhà gái Xóm Trường An, thôn Nam Dương, xã Hòa Nam, huyện Ứng Hòa, TP. Hà Nội",
      googleMapUrl: "https://maps.app.goo.gl/yNL748qVPosG8xDp7"
    },
    {
      title: t("wedding_title"),
      imageUrl: "/thankyou/sp/491A3159.JPG",
      startDate: new Date(2024, 8, 29, 10, 30),
      endDate: new Date(2024, 8, 29, 15, 0),
      address: "Hội trường cưới khách sạn Hòa Nam Đầu đê, Ứng Hòa, Hanoi 13800, Vietnam",
      googleMapUrl: "https://maps.app.goo.gl/W85Fz6Lv1TXxj68r8"
    },
  
  ]


  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = events.length -1;


  const handleNext = () => {
    if (activeStep < maxSteps) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };


  return (
    <div className={styles.container}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{marginBottom: "30px"}}>
        {events.map((event, index) => (
          <Step key={event.title}  completed={false} className={index == activeStep?styles.stepColor:""}>
            <StepLabel>{event.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={styles.eventsContainer}>
        <IconButton size="large" onClick={() => handleBack()}>
          <KeyboardArrowLeft/>
        </IconButton>
        <Event {...events[activeStep]}/>
        <IconButton size="large" onClick={() => handleNext()}>
          <KeyboardArrowRight/>
        </IconButton>
      </div>
      
    </div>
  )
}