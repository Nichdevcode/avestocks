'use client'
import Link from 'next/link'
import React, { useReducer, FormEvent } from 'react'
import { IUserRegister, IRegistereducerAction } from '@/interfaces'
import { toast } from 'react-toastify'
import useMutation from '@/hooks/useMutation'
import { useRouter } from 'next/navigation'
import { apiRegister } from '@/services/AuthService'
import Loader from '@/components/Loader'
import countryData from "@/lib/countries.json"
import currenciesData from '@/lib/currencies.json'
import { IPageContent } from '@/dictionaries/register'
import { RegisterContent } from '@/dictionaries/register'
import { useTranslation } from '@/hooks/useTranslationContext'


const initialState: IUserRegister = {
  email: '',
  password: '', 
  // confirm_password: '',
  first_name: '',      
  last_name: '',   
  phone: '',
  terms: false,
  nationality: '',
  currency: ''  
}

// const currencies = [
//   {
//     "code": "AUD",
//     "name": "Austrillian Dollar",
//     "symbol": "$"
//   },
//   {
//     "code": "BWP",
//     "name": "Botswana Pula",
//     "symbol": "P"
//   },
//   {
//     "code": "EUR",
//     "name": "Euro",
//     "symbol": "€"
//   },
//   {
//     "code": "GBP",
//     "name": "British Pound",
//     "symbol": "£"
//   },
//   {
//     "code": "USD",
//     "name": "US Dollar",
//     "symbol": "$"
//   },
//   {
//     "code": "ZAR",
//     "name": "South African Rand",
//     "symbol": "R"
//   }
// ]

const Register = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(RegisterContent[language])
  }, [language])


  const [loading, setLoading] = React.useState(false)
  const [user, dispatch] = useReducer((state: IUserRegister, action: IRegistereducerAction) => {
    if (action.type === 'terms') {
      return { ...state, [action.type]: action.payload === 'true' ? true : false }
    }
    return { ...state, [action.type]: action.payload }
}, initialState)

const router = useRouter()

const registerMutation = useMutation<IUserRegister, any>(
    apiRegister,
    {
      onSuccess: (data) => {
          toast.success("Registered Successfully.. You'd be redirected to the login page")
          console.log({ message: "Registered Successfully", data })
          router.push('/login')
          
      },
      showErrorMessage: true,
    }
  )

  console.log({user})



const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  setLoading(true)

  console.log('registering')


  // if (user?.password !== user?.confirm_password) {
  //     toast.error("Password Mismatch")
  //     return
  // }
  if (user?.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
  }
  if (!user?.terms) {
      toast.error("You must agree to the terms and conditions")
      return
  }

  try {
    console.log("user", user )
    // const res = await apiRegister(user)
    // console.log({res})
    registerMutation?.mutate(user)
    console.log(registerMutation)

      // console.log("res", res)
  } catch (error: any) {
      console.log("error", error)
      toast.error(error?.response?.data?.message || "An error occured")

  }
  setLoading(false)
}


  return (
    <div className='max-w-md mx-auto bg-white lg:max-w-none lg:pl-24'>
      {registerMutation?.isLoading && <Loader />}
      <div className="flex flex-col items-center gap-4 mt-16 mb-8">
          <h1 className='text-2xl font-bold'>{t?.title || "Create an Account"}</h1>
          <p className='text-sm'>{t?.content || "Create an account to Get Started"}</p>
      </div>
      <div className="">
        <div className='mb-2'>
            <form className='grid gap-4' onSubmit={handleRegister}>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="first_name">{t?.first_name || "First Name"}</label>
                <input required value={user?.first_name} onChange={(e) => dispatch({ type: "first_name", payload: e.target.value})} type='text' name="first_name" id="first_name" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder={t?.first_name || "First Name"} />
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="last_name">{t?.last_name || "Last Name"}</label>
                <input required value={user?.last_name} onChange={(e) => dispatch({ type: "last_name", payload: e.target.value})}  type="text" name="last_name" id="last_name" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder={t?.last_name || "First Name"} />
              </div>
              <div className="grid w-full gap-4 md:grid-cols-2 md:gap-2">
                <div className='flex flex-col gap-2 text-xs'>
                  <label htmlFor="phone">{t?.phone || "Phone Number"}</label>
                  <input required value={user?.phone} onChange={(e) => dispatch({ type: "phone", payload: e.target.value})}  type="text" name="phone" id="phone" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder={t?.phone || "Phone Number"} />
                </div>
                <div className='flex flex-col gap-2 text-xs'>
                  <label htmlFor="email">{t?.email || "Email Address"}</label>
                  <input required value={user?.email} onChange={(e) => dispatch({ type: "email", payload: e.target.value})}  type="email" name="email" id="email" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder={t?.email || "Email Address"} />
                </div>
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="password">{t?.password || "Password"}</label>
                <input required value={user?.password} onChange={(e) => dispatch({ type: "password", payload: e.target.value})}  type="password" name="password" id="password" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder={t?.password || "Password"} />
              </div>
              <div className="flex justify-between w-full gap-2">
                <div className='flex flex-col flex-1 gap-2 text-xs'>
                  <label htmlFor="nationality">{t?.nationality || "Nationality"}</label>
                  <select value={user?.nationality} onChange={(e) => dispatch({ type: "nationality", payload: e.target.value})} className='w-full p-2 px-3 text-sm border rounded-md text-black/70' name="nationality" id="nationality">
                    <option value="">{t?.nationality || "Nationality"}</option>
                    {
                      countryData.countries.map(country => <option key={country.code} value={country.name}>{country.name}</option>)
                    }
                  </select>
                </div>
                {/* <div className='flex flex-col flex-1 gap-2 text-xs'>
                  <input required value={user?.nationality} onChange={(e) => dispatch({ type: "nationality", payload: e.target.value})}  type="password" name="nationality" id="nationality" className='w-full p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Nationality' />
                </div> */}
                <div className='flex flex-col flex-1 gap-2 text-xs'>
                  <label htmlFor="currency">{t?.currency || "Currency"}</label>
                  <select value={user?.currency} onChange={(e) => dispatch({ type: "currency", payload: e.target.value})} className='w-full p-2 px-3 text-sm border rounded-md text-black/70' name="currency" id="currency">
                    <option value="">{t?.currency || "Currency"}</option>
                    {
                      currenciesData?.currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code}</option>)
                    }
                  </select>
                  {/* <input required value={user?.currency} onChange={(e) => dispatch({ type: "currency", payload: e.target.value})}  type="password" name="currency" id="currency" className='w-full p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Currency' /> */}
                </div>
              </div>
              {/* <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input required value={user?.confirm_password} onChange={(e) => dispatch({ type: "confirm_password", payload: e.target.value})}  type="password" name="confirm_password" id="confirm_password" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Confrim Password' />
              </div> */}
              <div className="flex items-center gap-3">
                <input className='cursor-pointer' type="checkbox" name="terms" id="terms" checked={user?.terms} onChange={(e) => dispatch({ type: "terms", payload: String(!user?.terms ? "true": "false") })}  />
                <label htmlFor='terms' className='text-xs cursor-pointer'>{t?.privacy || "I agree to Avestocks' Terms & Conditions and Privacy Policy"}</label>
              </div>
              <button type='submit' className='flex items-center justify-center w-full gap-2 p-4 pl-5 pr-6 text-sm font-bold text-white rounded-md bg-primary'>
                {t?.register || "Sign Up"}
              </button>
              <p className='my-2 text-sm text-center'>
              {t?.login || "Already have an account?"} {'  '}
                <Link href='/login' className='font-semibold'>
                  {t?.loginLink || "Login"}
                </Link>
              </p>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register