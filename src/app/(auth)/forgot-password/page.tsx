'use client'
import Link from 'next/link'
import React, { useReducer, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IUserLogin, ILoginReducerAction, IResetPassword } from '@/interfaces'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import { IPageContent } from '@/dictionaries/login'
import { LoginContent } from '@/dictionaries/login'
import { useTranslation } from '@/hooks/useTranslationContext'
import { apiLogin, apiResetPassword } from '@/services/AuthService'
import useMutation from '@/hooks/useMutation'
import { useAuthContext } from '@/hooks/useAuthContext'
import currenciesData from '@/lib/currencies.json'



const initialState: IResetPassword = {
  email: '',
}


const Login = () => {
  const context = useAuthContext()
  // const { language } = useTranslation()
  // const [t, setTranslated] = useState<IPageContent | null>(null)

  // useEffect(() => {
  //   setTranslated(LoginContent[language])
  // }, [language])

  const [loading, setLoading] = React.useState(false)
  const [user, dispatch] = useReducer((state: IResetPassword, action: ILoginReducerAction) => {
    return { ...state, [action.type]: action.payload }
}, initialState)
const router = useRouter()


const resetPasswordMutation = useMutation<IResetPassword, any>(
  apiResetPassword,
  {
    onSuccess: (data) => {
        dispatch({ type: "email", payload: ''})
        toast.success("A password Reset Link has been sent to your Email")
    },
    showErrorMessage: true,
  }
)

const handleResetPasswordMutation = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  resetPasswordMutation.mutate(user)
}


  return (
    <div className='max-w-md mx-auto bg-white lg:max-w-none lg:pl-24'>
      {(loading || resetPasswordMutation?.isLoading) && <Loader />}
      <div className="flex flex-col items-center gap-4 mt-16 mb-12">
          <h1 className='text-2xl font-bold'>{ "Password Reset!"}</h1>
          <p className='text-sm'>{"Enter your registered email address"}</p>
      </div>
      <form onSubmit={handleResetPasswordMutation} action="" className="max-w-l">
        <div className='grid gap-4 mb-2'>
            <div className='flex flex-col gap-2 text-xs'>
              <label htmlFor="name">{"Email Address"}</label>
              <input  value={user?.email} onChange={(e) => dispatch({ type: "email", payload: e.target.value})} type="text" name="name" id="name" className='p-3 border rounded-md placeholder:text-sm' placeholder={'Enter Email Address'} />
            </div>
        </div>
        <button type='submit' className='flex items-center justify-center w-full gap-2 p-4 pl-5 pr-6 mt-12 text-sm font-bold text-white rounded-md bg-primary'>
            {"Reset"}
        </button>
        <p className='my-2 text-sm text-center'>
          {"Back to"} {'  '}
          <Link href='/login' className='font-semibold'>
            {"Login"}
          </Link>
        </p>
        
      </form>
    </div>
  )
}

export default Login