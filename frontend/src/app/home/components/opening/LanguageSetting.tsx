import { Button } from '@mui/material'
import React from 'react'
import styles from "./styles.module.css"
import { useTranslation } from 'react-i18next'

function LanguageSetting() {
  const { t, i18n } = useTranslation()  
  
  const onClick = (lang:string) => {
      i18n.changeLanguage(lang);
      sessionStorage.setItem('lang', lang);
  }
  return (
    <div className={styles.languageSetting}>
        <Button variant="text" disabled={i18n.language === "ja"} onClick={() => onClick("ja")}>JA</Button>
        <span>/</span>
        <Button variant="text" disabled={i18n.language === "vn"} onClick={() => onClick("vn")}>VN</Button>
    </div>
  )
}

export default LanguageSetting