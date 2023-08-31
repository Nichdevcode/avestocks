'use client'
import React from 'react'
import Table from '@/components/Table'
import { ITableColumn, IWallet } from '@/interfaces'
import { useSession } from 'next-auth/react'
import useFetch from '@/hooks/useFetch'
import { apiGetWallets } from '@/services/UserService'
import Link from 'next/link'
import { apiGetUser } from '@/services/AuthService'
import { IPageContent } from '@/dictionaries/dashboard/home'
import { DashboardHomeContent } from '@/dictionaries/dashboard/home'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'

// import { useSession } from 'next-auth/react'


const Home = () => {
  const context = useAuthContext()
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardHomeContent[language])
  }, [language])

  const user = context?.user

  
  const { data: wallets, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })

  const { data: userDetails, refetch: refetchUser } = useFetch({ 
    api: apiGetUser, 
    key: ['userDetails'],
    param: {
      id: user?._id
    },
   })

  //  console.log({ userDetails })

  const columns: ITableColumn[] = [
    {
      name: 'name',
      label: t?.currency || 'Currency',
    },
    // {
    //   name: 'full_name',
    //   label: "A",
    // },
    {
      name: 'option',
      label: t?.action || 'Action',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <div className="flex items-center gap-3">
                <Link href={'/dashboard/deposit'}>
                  <button className='p-2 px-3 text-sm text-white bg-primary'>{t?.deposit || "Deposit"}</button>
                </Link>
                <Link href={'/dashboard/withdrawal'}>
                  <button className='p-2 px-3 text-sm bg-white border text-primary border-primary'>{t?.withdraw || "Withdraw"}</button>
                </Link>
            </div>
        )
      },
    },
  ]

  const tableData = [
    {
        name: 'Dollar',
        full_name: '$0.00',
    },
    {
        name: 'Bitcoin',
        full_name: '$0.00',
    },
    {
        matric_no: 'Ethereum',
        full_name: '$0.00',
    },
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6 bg-black/5'>
      <div className="flex items-center gap-2 mb-6">
        <h2 className='text-lg font-semibold'>{t?.title || "Welcome"}, {userDetails?.last_name} {userDetails?.first_name}</h2>  
        {
          userDetails?.status == "verified" ? (
            <span className='px-2 py-1 text-xs text-white bg-green-500 rounded-full'>{t?.status[1] || "verified"}</span>
          )
          :
          (userDetails?.status == "unverified" ||  userDetails?.status == "failed") ? (
            <span className='px-2 py-1 text-xs text-white bg-red-500 rounded-full'>{t?.status[0] || "unverified"}</span>
          )
          :
          (
            <span className='px-2 py-1 text-xs text-white rounded-full bg-primary'>{t?.status[2] || "pending"}</span>
          )
        }
      </div>
        {
          ((userDetails?.status == "unverified") || (userDetails?.status == "failed")) && (
            <div className="flex items-center justify-between gap-8 p-5 mb-12 text-sm bg-white rounded-md shadow-md">
                <div className="flex items-center gap-6">
                    <p className='text-sm'>{t?.unverified || "Your account is not verified. Please verify your account to access all features"}</p>
                    <Link href={'/dashboard/kyc'}><button className='p-2 px-3 text-sm text-white bg-primary whitespace-nowrap'>{t?.verify_now || "Verify Account"}</button></Link>
                </div>
            </div>
          )
        }
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between gap-8">
                    <span>{t?.balance_title || "My Balance"}</span>
                </div>
                <p className='text-lg font-bold'>${userDetails?.balance || '0.00'}</p>
                <div className="flex items-center gap-6">
                <Link href={'/dashboard/deposit'}>
                    <button className='p-2 px-3 text-sm text-white bg-primary'>{t?.deposit || "Deposit"}</button>
                </Link>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-8 p-5 text-sm bg-white rounded-md shadow-md">
                <p className='text-lg lg:max-w-[220px]'>{t?.referral_title || "Invite Friends & get extra income!"}</p>
                <div className="flex items-center gap-6">
                  <Link href={'/dashboard/referral'}>
                  <button className='p-2 px-3 text-sm text-white bg-primary'>{t?.refer || "Earn More"}</button>
                  </Link>
                </div>
            </div>
        </div>
        <div className=''>
          <Table title={t?.table_title || 'Deposit Wallets'} data={wallets || []} columns={columns} />
        </div>
    </main>
  )
}

export default Home