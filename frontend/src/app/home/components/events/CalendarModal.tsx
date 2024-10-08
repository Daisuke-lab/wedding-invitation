"use client"
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import EmailIcon from '@mui/icons-material/Email';
import { generateGoogleCalendarUrl, generateIcsCalendarFile, generateYahooCalendarUrl } from '@/utils/CalendarUtil';
import { EventType } from './Event';
import { isPC } from '@/utils/AgentUtil';
import { useTranslation } from 'react-i18next';

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    event: EventType
}

export default function CalendarModal({open, setOpen, event}: Props) {
  const { t } = useTranslation();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isPC()? 400: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };


    const onClick = (mailSoftware:string) => {
        let url = "";
        switch (mailSoftware) {
            case "apple":
                url = generateIcsCalendarFile(event)
                break;
            case "outlook":
                url = generateIcsCalendarFile(event)
                break;
            case "yahoo":
                url = generateYahooCalendarUrl(event)
                break;
            case "google":
                url = generateGoogleCalendarUrl(event)
                break;
        }
        window.open(url, '_blank');
    }
  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {t("selecting_calendar_message")}
            </Typography>
            <List>
                <ListItemButton onClick={() => onClick("google")}>
                    <ListItemIcon>
                        <GoogleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Google Calendar" />
                </ListItemButton>
                <ListItemButton onClick={() => onClick("apple")}>
                    <ListItemIcon>
                        <AppleIcon />
                    </ListItemIcon>
                    <ListItemText primary="iCluod Calendar" />
                </ListItemButton>
                <ListItemButton onClick={() => onClick("outlook")}>
                    <ListItemIcon>
                        <MicrosoftIcon />
                    </ListItemIcon>
                    <ListItemText primary="Outlook Calendar" />
                </ListItemButton>
                <ListItemButton onClick={() => onClick("yahoo")}>
                    <ListItemIcon>
                        <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Yahoo Calendar" />
                </ListItemButton>
            </List>
          </Box>
        </Fade>
      </Modal>
  )
}