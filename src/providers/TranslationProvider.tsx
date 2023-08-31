'use client'
import React from 'react'
import { createContext } from "react"
import { ILanguage } from '@/interfaces'

interface ITranslationContext {
    language: ILanguage
    setLanguage: (language: ILanguage) => void
}

export const TranslationContext = createContext<ITranslationContext>({
    language: 'en',
    setLanguage: () => { }
})

interface Props {
    children: React.ReactNode
}



export const TranslationProvider = ({ children }: Props) => {
    const [language, setLanguage] = React.useState<ILanguage>('en')

    const value = {
        language,
        setLanguage
    }

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    )
}