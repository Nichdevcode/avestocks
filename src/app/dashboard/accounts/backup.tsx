'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { IPageContent } from '@/dictionaries/dashboard/accounts'
import { DashboardAccountContent } from '@/dictionaries/dashboard/accounts'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { apiGetUser } from '@/services/AuthService'
import useFetch from '@/hooks/useFetch'


const Account = () => {
  const context = useAuthContext()
  const user = context?.user

  const { data: userDetails, refetch: refetchUser } = useFetch({ 
    api: apiGetUser, 
    key: ['userDetails'],
    param: {
      id: user?._id
    },
   })


   console.log({ userDetails })

  // const session = useSession()

  const { language } = useTranslation()
  const [tAccount, setTranslatedAccount] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslatedAccount(DashboardAccountContent[language])
  }, [language])



  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>{tAccount?.title || "Account"}</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
          <div className="flex flex-col flex-1 gap-4 p-5 text-sm font-bold bg-white rounded-md shadow-md">
              <span className='font-bold text-primary'>{tAccount?.regular || "Regular Account"}</span>
              <p>${userDetails?.balance || '0.00'}</p>
              <span className='font-bold text-primary'>{tAccount?.earnings || "Total Earnings"}</span>
              <p>${userDetails?.total_earnings || '0.00'}</p>
              <span className='font-bold text-primary'>{tAccount?.investment || "Total Investment"}</span>
              <p>${userDetails?.total_investment || '0.00'}</p>
              <button className='p-2 px-3 text-sm text-white bg-primary'>{tAccount?.invest || "Start Investment"}</button>
          </div>
        </div>
        <div className='grid gap-4 mb-12 text-sm font-semibold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:flex-row'>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${userDetails?.bonus || '0.00'}</p>
            <p>{tAccount?.bonus ||"Bonus"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>{userDetails?.total_deposit || '0'}</p>
            <p>{tAccount?.deposits || "Total Deposit"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>{userDetails?.total_withdrawal || '0'}</p>
            <p>{tAccount?.withdrawals || "Total Withdrawal"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>0</p>
            <p>{tAccount?.referrals || "Total Referral"}</p>
          </div>
        </div>
      
    </main>
  )
}

export default Account