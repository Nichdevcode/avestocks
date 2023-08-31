'use client'
import { useState } from 'react'
import { toast } from 'react-toastify'


function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState('')
  // const [message, setMessage ] = useState('')


  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      toast.warn('Clipboard not supported')
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      // console.log('Copying to clipboard', text)
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      // setMessage("Copied to clipboard")
      toast.success("Copied to clipboard")
    } catch (error) {
      // setMessage("Copy failed")
      toast.error("Failed to copy to clipboard")
    }
  }

  return { copy, copiedText }
}

export default useCopyToClipboard;
