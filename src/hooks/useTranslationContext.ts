'use client'
import { useContext } from 'react'
import { TranslationContext } from '@/providers/TranslationProvider'


export const useTranslation = () => {
    const context = useContext(TranslationContext)
    // console.log("context", context)

    if (!context) {
        throw Error("translation context must be used inside a TranslationContextProvider")
    }

    return context
}