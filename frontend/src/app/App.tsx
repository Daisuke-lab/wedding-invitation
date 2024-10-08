'use client'
import React from 'react'
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import ja from "../../public/localization/ja.json"
import vn from "../../public/localization/vn.json"
import { useRouter, useSearchParams } from 'next/navigation';
import Localizer from './Localizer';
import { Suspense } from "react"; //追加
i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'ja',                              // default language
  resources: {
    ja: {
      translation: ja
    },
    vn: {
      translation: vn
    }
  }
});



export default function App({
    children,
  }: {
    children: React.ReactNode
  }) {
    // const router = useRouter()
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense>
      <Localizer>
        {children}
        </Localizer>
        </Suspense>
    </I18nextProvider>
  )
}