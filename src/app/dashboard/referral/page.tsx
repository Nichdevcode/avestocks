'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useCopy from '@/hooks/useCopy'
import { IPageContent } from '@/dictionaries/dashboard/refer'
import { DashboardReferContent } from '@/dictionaries/dashboard/refer'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { apiGetUser } from '@/services/AuthService'
import useFetch from '@/hooks/useFetch'
import { BsDash, BsDashCircleFill } from 'react-icons/bs'


const Refer = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardReferContent[language])
  }, [language])

  // const session = useSession()
  // const user = session.data?.user
  const context = useAuthContext()
  const user = context?.user

  const { data: userDetails, refetch: refetchUser } = useFetch({ 
    api: apiGetUser, 
    key: ['userDetails'],
    param: {
      id: user?._id
    },
   })

  const router = useRouter()
  const { copy } = useCopy()




  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Referral Program: Share and Earn Together"}</h2>
        
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px] mb-6">
            <p className='text-lg'>0</p>
            <p className='font-semibold text-primary'>{t?.refer || "Total Referral"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px] mb-6">
            <p onClick={() => copy(`https://avestock.com/register?ref=${userDetails?.referral_id}`)} className='flex items-center justify-center gap-2 text-sm text-center text-primary'>
              https://avestock.com/register?ref={userDetails?.referral_id}
              <button className='p-1 px-3 text-xs text-white bg-primary'>{t?.copy || "Copy"}</button>
            </p>
          </div>
          <div className="p-5 mb-6 bg-white rounded-md">
            <h4 className='mb-4 font-semibold'>{t?.how_it_works || "How It Works"}:</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BsDashCircleFill className={"text-primary font-bold"} />
                <p>{t?.works_1 || "Copy Your Unique Referral Link Above"}</p>
              </div>
              <div className="flex items-center gap-2">
                <BsDashCircleFill className={"text-primary font-bold"} />
                <p>{t?.works_2 || "Spread the Word"}</p>
              </div>
              <div className="flex items-center gap-2">
                <BsDashCircleFill className={"text-primary font-bold"} />
                <p>{t?.works_3 || "Your Friends Sign Up"}</p>
              </div>
              <div className="flex items-center gap-2">
                <BsDashCircleFill className={"text-primary font-bold"} />
                <p>{t?.works_4 || "You Earn Rewards"}</p>
              </div>
            </div>
          </div>
       
    </main>
  )
}

export default Refer