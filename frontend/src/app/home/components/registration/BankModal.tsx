"use client"
import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Image from 'next/image';
import { isPC } from '@/utils/AgentUtil';
import { useTranslation } from 'react-i18next';
import styles from "./styles.module.css"

type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BankModal({open, setOpen}: Props) {
  const { t } = useTranslation();
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isPC()? 400: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    // overflowY: "scroll",
    p: 4,
  };

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
          <h2 className={styles.weddingBoxTitle}>Wedding Box</h2>
          <h3 className={styles.bankAccountTitle}>日本の口座</h3>
          <p>金融機関：三菱UFJ銀行</p>
          <p>口座種別：普通</p>
          <p>支店名：神田支店（331）</p>
          <p>口座番号：0514355</p>
          <h3 className={styles.bankAccountTitle}>Vietnam Bank Account</h3>
          <Image src="/home/vietnamese_bank_account.jpg" alt="vietnam_bank_account" width={300} height={300}
        quality={100}/>
          </Box>
        </Fade>
      </Modal>
  )
}