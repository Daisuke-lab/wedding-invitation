import React, { useState } from 'react'
import Image from 'next/image';
import styles from "./styles.module.css"
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarModal from './CalendarModal';
import { useTranslation } from 'react-i18next';
import { convertDateToString } from '@/utils/DateUtil';

export type EventType = {
    title: string,
    imageUrl: string,
    googleMapUrl: string,
    startDate: Date,
    endDate: Date,
    address: string


}

export default function Event(event: EventType) {
    const { t } = useTranslation();
    const {title, imageUrl, googleMapUrl, startDate, endDate, address} = event
    const openGoogleMap = (url:string) => {
        window.open(url, '_blank');
    }; 

    const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.eventContainer}>
        <Image src={imageUrl} alt={title} className={styles.eventImage} layout='fill'
        objectFit="cover"
        quality={100}/>
        <div className={styles.eventDetailContainer}> 
            <p>{t("date_label")}: {convertDateToString(startDate)} ~ {convertDateToString(endDate)}</p>
            <p>{t("location_label")}: {address}</p>
            <Button variant="contained" startIcon={<CalendarMonthIcon />} color="brown" onClick={() => setOpen(true)} style={{width: "200px"}}>
                {t("adding_to_calendar_label")}
            </Button>
            <Button variant="contained" startIcon={<PlaceIcon />} color="brown" onClick={() => openGoogleMap(googleMapUrl)} style={{width: "200px"}}>
                Google Map
            </Button>
        </div>
        <CalendarModal {...{open, setOpen, event}}/>
    </div>
  )
}