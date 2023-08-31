'use client'
import React, { useReducer, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IUserLogin, ILoginReducerAction } from '@/interfaces'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader'
import { IPageContent } from '@/dictionaries/login'
import { LoginContent } from '@/dictionaries/login'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import useMutations from '@/hooks/useMutation'
import { apiLogin } from '@/services/AuthService'
import currenciesData from '@/lib/currencies.json'

const initialState: IUserLogin = {
  email: '',
  password: ''
}


const Login = () => {
  const context = useAuthContext()
  const { language } = useTranslation()
  const [t, setTranslated] = useState<IPageContent | null>(null)

  useEffect(() => {
    setTranslated(LoginContent[language])
  }, [language])

  const [loading, setLoading] = React.useState(false)
  const [user, dispatch] = useReducer((state: IUserLogin, action: ILoginReducerAction) => {
    return { ...state, [action.type]: action.payload }
}, initialState)
const router = useRouter()


const loginMutation = useMutations<IUserLogin, any>(
  apiLogin,
  {
    onSuccess: (data) => {

        const symbol = currenciesData?.currencies?.find((currency) => currency?.code === data?.currency)
  
        context.dispatch({ type: "LOGIN", payload: {
          symbol: symbol?.symbol || "$",
          ...data
        }})
        
        toast.success("Logged in Successfully.")
        return router.push('/admin')
    },
    showErrorMessage: true,
  }
)

const handleLoginMutation = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  loginMutation.mutate(user)
}


  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    // toast.info('Deactivated By Admin')
    // setLoading(false)
    try {
      console.log("user", user)
        const res = await signIn('credentials', {
            ...user,
            redirect: false,
            email: user?.email,
            onUnauthenticated() {
                toast.error("Invalid Credentials")
            }
        })

        // console.log("res", res)

        if (!res?.error) {
          return router.push('/dashboard')
        }
        
        throw new Error(res?.error)
    } catch (error: any) {
        console.log("error", error)
        toast.error(error?.message)
    }
    setLoading(false)
}


  return (
    <div className='bg-white md:pl-24'>
      {(loading || loginMutation?.isLoading) && <Loader />}
      <div className="flex flex-col items-center gap-4 mt-16 mb-12">
          <h1 className='text-2xl font-bold'>{"Admin Login!"}</h1>
          <p className='text-sm'>{t?.content || "Sign in to continue to Avestock"}</p>
      </div>
      <form onSubmit={handleLoginMutation} action="" className="max-w-l">
        <div className='grid gap-4 mb-2'>
            <div className='flex flex-col gap-2 text-xs'>
              <label htmlFor="name">{t?.email || "Email Address"}</label>
              <input  value={user?.email} onChange={(e) => dispatch({ type: "email", payload: e.target.value})} type="text" name="name" id="name" className='p-3 border rounded-md placeholder:text-sm' placeholder={t?.email || 'Enter Email Address'} />
            </div>
            <div className='flex flex-col gap-2 text-xs'>
              <label htmlFor="name">{t?.password || "Password"}</label>
              <input  value={user?.password} onChange={(e) => dispatch({ type: "password", payload: e.target.value})} type="text" name="password" id="password" className='p-3 border rounded-md placeholder:text-sm' placeholder={t?.password || "Password"} />
            </div>
        </div>
        <button type='submit' className='flex items-center justify-center w-full gap-2 p-4 pl-5 pr-6 mt-12 text-sm font-bold text-white rounded-md bg-primary'>
            {t?.login || "Sign In"}
        </button>        
      </form>
    </div>
  )
}

export default Login