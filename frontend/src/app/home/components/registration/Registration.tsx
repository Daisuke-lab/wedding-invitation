'use client'
 
import { useState } from 'react'
import styles from "./styles.module.css"
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import BankModal from './BankModal';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { IconButton } from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Registration() {
    const { t } = useTranslation();
    const [open, setOpen] = useState<boolean>(false)

    
    return (
        <div className={styles.container}>
            <div className="flex flex-col items-center justify-around" style={{minHeight: "inherit"}}>
                    <p className={styles.description}>{t("registration_request_message")}</p>
            <div>
             <Button color="brown" href="/form" className={styles.registrationButton} variant='contained'>
                {t("registration_request_button")}
             </Button>
             <br/>
             {/* <Button size="small" color="pink" className={styles.registrationButton} onClick={() => setOpen(true)}
             >{t("registration_for_unattendee")}</Button> */}
             <div className={styles.giftButton}>
             <IconButton size="large" onClick={() => setOpen(true)} color="pink">
                <CardGiftcardIcon/>
            </IconButton>
            </div>
            </div>
            </div>
            <BankModal {...{open, setOpen}}/>
        </div>
    )
}
