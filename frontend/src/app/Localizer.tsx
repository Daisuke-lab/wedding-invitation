"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'


export default function Localizer({
  children,
}: {
  children: React.ReactNode
}) {
    const { i18n } = useTranslation()
    const lang = useSearchParams().get("lang")
    const [rendered, setRendered] = useState<boolean>(false)
    useEffect(() => {
        const sessionLang = sessionStorage?.getItem("lang")
        if (lang == "ja" || lang == "vn") {
            i18n.changeLanguage(lang);
            sessionStorage.setItem('lang', lang);
        } else if (sessionLang != null && sessionLang != undefined) {
            i18n.changeLanguage(sessionLang)
        }
        setRendered(true)
    }, [])
  return (
    <>
    {rendered?(<>{children}</>):(<></>)}
    </>
  )
}