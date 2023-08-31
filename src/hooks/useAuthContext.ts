'use client'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider'


export const useAuthContext = () => {
    const context = useContext(AuthContext)
    // console.log("context", context)

    if (!context) {
        throw Error("translation context must be used inside a TranslationContextProvider")
    }

    return context
}