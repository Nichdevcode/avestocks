'use client'
import useFetch from '@/hooks/useFetch'
import usePost from '@/hooks/useMutation'
import { IWithdrawal } from '@/interfaces'
import { apiGetUserWithdrawals, apiWithdrawal } from '@/services/UserService'
import { formatDate } from '@/utils/dateFunc'
import { useSession } from 'next-auth/react'
import React from 'react'
import { IPageContent } from '@/dictionaries/dashboard/withdraw'
import { DashboardWithdrawContent } from '@/dictionaries/dashboard/withdraw'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { BiLeftArrow } from 'react-icons/bi'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
import { CryptoCurrencyMarket } from 'react-ts-tradingview-widgets'
import { WithdrawalType, assetType } from '@/interfaces'

const Withdrawal = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)



  React.useEffect(() => {
    setTranslated(DashboardWithdrawContent[language])
  }, [language])


  // const session = useSession()
  // const user = session.data?.user
  const context = useAuthContext()
  const user = context?.user

  const [step, setStep] = React.useState(1)
  const [amount, setAmount] = React.useState('')
  const [wallet, setWallet] = React.useState('')
  const [assetType, setAssetType] = React.useState<assetType | undefined>()
  const [bankName, setBankName] = React.useState<string>('')
  const [accountName, setAccountName] = React.useState<string>('')
  const [accountNumber, setAccountNumber] = React.useState<string>('')
  

  const { data: withdrawals, error: withdrawalsError, isLoading: withdrawalsLoading, refetch } = useFetch<IWithdrawal[]>({api: apiGetUserWithdrawals, param: user?._id, key: ['userWithdrawals'] })

  // console.log({ withdrawals})

  const withdrawalMutation = usePost<IWithdrawal, any>(apiWithdrawal, {
    onSuccess: (data) => {
      console.log(data)
      toast.success('Withdrawal Request Sent Successfully')
      refetch()
      setStep(1)
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "An Error Occurred!");
      console.log(error)
    }   
  })

  const handleWithdrawalViaBank = () => {
    withdrawalMutation.mutate({
      email: user?.email!,      
      userId: user?._id!,
      type: "BANK",
      amount: +amount,
      bank_name: bankName,
      account_name: accountName,
      account_number: accountNumber,
    })
  }
  
  const handleWithdrawalViaCrypto = () => {
    withdrawalMutation.mutate({
      email: user?.email!,      
      userId: user?._id!,
      type: "CRYPTO",
      amount: +amount,
      wallet,
      asset: assetType
    })
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        withdrawalMutation.isLoading && <GentleLoader />
      }
      <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Withdrawal"}</h2>
      {step === 1 && (
       <div>
          <div className='grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 bg-primary text-white rounded-md shadow-md min-w-[200px]">
              <p className='font-semibold'>{t?.subtitle || "Withdraw Funds Via Wallet"}</p>
              <p className='text-xs'>{t?.subtitle_text || "click to initiate withdrawal"}</p>
            </div>
            <div onClick={() => setStep(3)} className="cursor-pointer flex flex-col gap-1 p-4 bg-primary text-white rounded-md shadow-md min-w-[200px]">
              <p className='font-semibold'>{t?.via_bank || "Withdraw Funds Via Bank"}</p>
              <p className='text-xs'>{t?.subtitle_text || "click to initiate withdrawal"}</p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md">
            <h4 className='mb-2 font-semibold'>{t?.transactions || "Recent Transactions"}</h4>
            {
              withdrawals?.length ?
                withdrawals?.map((withdrawal) =>
                  <div key={withdrawal._id} className='p-2'>
                    <div className="flex justify-between flex-items-center">
                      <span>{t?.sent_withdraw || "sent withdrawal request"}</span>
                      <span>{withdrawal.status}</span>
                    </div>
                    <div className="flex justify-between flex-items-center">
                      <span>{formatDate(withdrawal.createdAt)}</span>
                      <span>{user?.symbol || "$"}{withdrawal.amount}</span>
                    </div>
                  </div>
                 ) : (
                  <div className="flex justify-center">
                    <span className='text-gray-500'>{t?.no_transactions || "No recent transactions"}</span>
                  </div>
              )   
            }
          </div>
       </div>
      )}
      {step === 2 && (
       <div>
          <h4 className='flex items-center gap-4 mb-4 font-semibold'>
              <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select onChange={(e) => setAssetType(e.target.value as assetType)} className='p-3 rounded-md'>
                <option value="">Select Asset Type</option>
                <option value="BNB">{"BNB"}</option>
                <option value="ETH">{"ETH"}</option>
                <option value="BTC">{"BTC"}</option>
              </select>
              <input onChange={(e) => setAmount(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.amount || 'Enter Amount'} />
              <input onChange={(e) => setWallet(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.wallet || 'Enter Wallet Address'} />
          <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleWithdrawalViaCrypto}>{t?.submit || "Submit"}</button>
            </div>
            <div className="flex-1 rounded-md shadow-md min-h-[350px]">
              <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
            </div>
          </div>
       </div>
      )}
      {step === 3 && (
       <div>
          <h4 className='flex items-center gap-4 mb-4 font-semibold'>
              <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <input onChange={(e) => setAmount(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.amount || 'Enter Amount'} />
              <input onChange={(e) => setBankName(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.bank_name || 'Enter Bank Name'} />
              <input onChange={(e) => setAccountName(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.account_name || 'Enter Account Name'} />
              <input onChange={(e) => setAccountNumber(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.account_number || 'Enter Account Number'} />
              <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleWithdrawalViaBank}>{t?.submit || "Submit"}</button>
            </div>
            <div className="flex-1 rounded-md shadow-md min-h-[350px]">
              <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
            </div>
          </div>
       </div>
      )}
    </main>
  )
}

export default Withdrawal