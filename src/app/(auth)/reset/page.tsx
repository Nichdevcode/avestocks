'use client'
import Link from 'next/link'
import React, { useReducer, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IUserLogin, ILoginReducerAction, IResetPassword, IConfirmResetPassword, IPasswordResetReducerAction } from '@/interfaces'
import { useParams, useRouter, usePathname, useSearchParams } from 'next/navigation'
import Loader from '@/components/Loader'
import { apiConfirmResetPassword, apiLogin, apiResetPassword } from '@/services/AuthService'
import useMutation from '@/hooks/useMutation'
import { useAuthContext } from '@/hooks/useAuthContext'
import currenciesData from '@/lib/currencies.json'



const initialState: IConfirmResetPassword = {
  email: "",
  code: '',
  new_password: '',
  confirm_password: ''
}


const Reset = () => {
  const context = useAuthContext()
  const params = useSearchParams()
  const code = params.get("code")
  const email = params.get("email")

  // const { language } = useTranslation()
  // const [t, setTranslated] = useState<IPageContent | null>(null)

  // useEffect(() => {
  //   setTranslated(LoginContent[language])
  // }, [language])

  const [loading, setLoading] = React.useState(false)
  const [user, dispatch] = useReducer((state: IConfirmResetPassword, action: IPasswordResetReducerAction) => {
    return { ...state, [action.type]: action.payload }
}, initialState)
const router = useRouter()


const resetPasswordMutation = useMutation<IConfirmResetPassword, any>(
  apiConfirmResetPassword,
  {
    onSuccess: (data) => {
      dispatch({ type: "new_password", payload: ''})
      dispatch({ type: "confirm_password", payload: ''})
      toast.success("You've Successfully Reset your password. You'd be redirected to the login page shortly")
      return router.push("/login")
    },
    showErrorMessage: true,
  }
)

const handleResetPasswordMutation = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  if (!code || !email) {
    toast.error("Request Link Malformed")
    return
  }
  if (user?.new_password != user?.confirm_password) {
      toast.error("Password Mismatch")
      return
  }
   resetPasswordMutation.mutate({
    ...user,
    email,
    code
  })
}


  return (
    <div className='max-w-md mx-auto bg-white lg:max-w-none lg:pl-24'>
      {(loading || resetPasswordMutation?.isLoading) && <Loader />}
      <div className="flex flex-col items-center gap-4 mt-16 mb-12">
          <h1 className='text-2xl font-bold'>{ "Password Reset!"}</h1>
          <p className='text-sm'>{"Reset your password"}</p>
      </div>
      <form onSubmit={handleResetPasswordMutation} action="" className="max-w-l">
        <div className='grid gap-4 mb-2'>
          <div className='flex flex-col gap-2 text-xs'>
              <label htmlFor="name">{"New Password"}</label>
              <input  value={user?.new_password} onChange={(e) => dispatch({ type: "new_password", payload: e.target.value})} type="text" name="password" id="password" className='p-3 border rounded-md placeholder:text-sm' placeholder={"New Password"} />
            </div>
          <div className='flex flex-col gap-2 text-xs'>
              <label htmlFor="name">{"Confirm Password"}</label>
              <input  value={user?.confirm_password} onChange={(e) => dispatch({ type: "confirm_password", payload: e.target.value})} type="text" name="password" id="password" className='p-3 border rounded-md placeholder:text-sm' placeholder={"Confirm Password"} />
            </div>
        </div>
        <button type='submit' className='flex items-center justify-center w-full gap-2 p-4 pl-5 pr-6 mt-12 text-sm font-bold text-white rounded-md bg-primary'>
            {"Confirm Reset"}
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

export default Reset