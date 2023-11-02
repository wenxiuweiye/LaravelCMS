import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import indexPageEn from './english/indexPage.json'
import indexPageZh_CN from './zh/indexPage.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources:{
            en: {
                index: indexPageEn
            },
            zh: {
                index: indexPageZh_CN
            }
        },
        lng: "en", 
        fallbackLng: 'en', 
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n;