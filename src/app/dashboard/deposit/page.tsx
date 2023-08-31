'use client'
import React, { useEffect } from 'react'
import useFetch from '@/hooks/useFetch'
import { apiDeposit, apiGetUserDeposits, apiGetWallets } from '@/services/UserService'
import { IBank, IDeposit, IWallet } from '@/interfaces'
import { useSession } from 'next-auth/react'
import usePost from '@/hooks/useMutation'
import { formatDate } from '@/utils/dateFunc'
import { BiLeftArrow } from 'react-icons/bi'
import { IPageContent } from '@/dictionaries/dashboard/deposit'
import { DashboardDepositContent } from '@/dictionaries/dashboard/deposit'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import Image from 'next/image'
import useImage from '@/hooks/useImage'
import { toast } from 'react-toastify'
import GentleLoader from '@/components/GentleLoader'
import { apiGetBanks } from '@/services/AdminService'
import useCopyToClipboard from '@/hooks/useCopy'
import { MdCopyAll } from 'react-icons/md'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import currenciesData from '@/lib/currencies.json'


const Deposit = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardDepositContent[language])
  }, [language])

  const context = useAuthContext()
  const user = context?.user

  
  
  // const session = useSession()
  // const user = session.data?.user
  const [step, setStep] = React.useState(1)
  const [choice, setChioce] = React.useState('')
  const [bankChoice, setBankChioce] = React.useState('')
  const [selectedBank, setSelectedBank] = React.useState<IBank | null>(null)
  const [amount, setAmount] = React.useState('')
  const [proof, setProof] = React.useState('')
  const [paymentMethod, setPaymentMethod] = React.useState('')
  const { url, uploadImage, error: errorImage, loading } = useImage()
  const { copy } = useCopyToClipboard()




  const { data: wallets, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })

  const { data: banks } = useFetch<IBank[]>({api: apiGetBanks, key: ['AdminBanks'] })
  
  const { data: deposits, error: depositsError, isLoading: depositsLoading, refetch } = useFetch<IDeposit[]>({api: apiGetUserDeposits, param: user?._id, key: ['userDeposits'] })

// console.log({ deposits})

  const depositMutation = usePost<IDeposit, any>(apiDeposit, {
    onSuccess: (data) => {
      console.log(data)
      toast.success("Deposit Request Sent Successfully")
      refetch()
      setStep(1)
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Error sending deposit request")
      console.log(error)
    }   
  })

  const handleDeposit = () => {
    if (!url) {
      return toast.info("Please upload proof of payment")
    }
    depositMutation.mutate({
      email: user?.email!,      
      userId: user?._id!,
      wallet: paymentMethod,
      amount: +amount,
      proof: url,      
    })
  }
  // const { data } = useSession()
  useEffect(() => {
    if (bankChoice) {
      setSelectedBank(banks?.find(bank => bank._id === bankChoice) || null)
    }
  }, [bankChoice, banks])


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        (loading || depositMutation?.isLoading) && <GentleLoader />
      }
      <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Deposit"}</h2>
      {step === 1 && (
       <div>
          <div className='grid gap-4 mb-6 mb-12 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>{t?.via_crypto || "Fund Via Cryto Wallet"}</p>
              <p className='text-xs'>{t?.via_crypto_text || "click to view address details"}</p>
            </div>
            <div onClick={() => setStep(3)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>{t?.via_bank || "Fund Via Local Bank"}</p>
              <p className='text-xs'>{t?.via_bank_text || "click to view bank options"}</p>
            </div>
            <div onClick={() => setStep(4)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>{t?.submit_proof || "Submit Proof"}</p>
              <p className='text-xs'>{t?.submit_proof_text || "click to submit payment proof"}</p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md">
            <h4 className='mb-2 font-semibold'>{t?.transactions_title || "Recent Transactions"}</h4>
            {
              deposits?.length ?
                deposits?.map(deposit =>
                  <div key={deposit._id} className='p-2'>
                    <div className="flex justify-between flex-items-center">
                      <span>{t?.transactions_text || "sent proof of payment"}</span>
                      <span>{deposit.status}</span>
                    </div>
                    <div className="flex justify-between flex-items-center">
                      <span>{formatDate(deposit.createdAt)}</span>
                      <span>{user?.symbol || "$"}{deposit.amount}</span>
                    </div>
                  </div>
              ): (
                <div className="flex justify-center">
                  <span className='text-gray-500'>{t?.no_transactions || "No recent transactions"}</span>
                </div>
            )}
          </div>
        </div>
      )}
      {step === 2 && (
       <div>
          <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            {t?.cryto_wallets || 'Cryto Wallets'}
          </h4>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select onChange={(e) => setChioce(e.target.value)} name="" id="">
                <option value="">{t?.choose_wallet || "Choose a payment method"}</option>
                {wallets?.map(wallet => 
                  <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                )}
              </select>
              {
                choice && 
                  <div className='flex flex-col gap-4'>
                    <p>{t?.click_to_copy || "Click the icon below to copy the wallet address or scan the QR-code and procced to payment"}</p>
                    <div className="w-48 h-48 mx-auto bg-gray-100">
                      <Image alt={`qr code`} src={wallets?.find(wallet => wallet.name === choice)?.qr_code || ''} width={100} height={100} className='w-48 h-48 bg-cover' />
                    </div>
                    <div className="flex items-center justify-center w-full gap-2 p-2 text-center rounded-md">
                      {wallets?.find(wallet => wallet.name === choice)?.address}
                      <MdCopyAll onClick={() => copy(wallets?.find(wallet => wallet.name === choice)?.address || '')} className='text-xl cursor-pointer text-primary' />
                    </div>
                    <p>
                     {t?.exact_crypto || " Make sure you send the exact amount of BTC as indicated above, otherwise your deposit will not be credited to your account."}
                    </p>
                    <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={() => setStep(4)}>{t?.next || "Next"}</button>
                  </div>
                  
              }
            </div>
            <div className="flex-1 rounded-md shadow-md min-h-[350px]">
              <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
            </div>
            {/* <div className="flex-1 rounded-md shadow-md min-h-[350px]">
             <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
            </div> */}
          </div>
        </div>
      )}
      {step === 3 && (
       <div>
         <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            {t?.bank_title || "Bank Details"}
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select onChange={(e) => setBankChioce(e.target.value)} name="" id="">
                <option value="">{t?.choose_bank || "Choose a Bank"}</option>
                {banks?.map(bank => 
                  <option key={bank._id} value={bank._id}>{bank.name}</option>
                )}
              </select>
            {bankChoice && selectedBank && selectedBank?.special ?
              <div className='flex flex-col gap-4'>
                <p>{t?.bank_transfer || "Make a transfer or deposit to the details below"}</p>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Bank</span>
                  {selectedBank?.name}
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span className='break-words'>{selectedBank?.type || ""}</span>
                  <div className="flex items-center justify-center gap-2 break-words">
                    {selectedBank?.number}
                    <MdCopyAll onClick={() => copy(selectedBank?.number || '')} className='text-xl cursor-pointer text-primary' />
                  </div>
                </div>
                <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={() => setStep(4)}>{t?.next || "Next"}</button>
              </div>
              :
              <div className='flex flex-col gap-4'>
                <p>{t?.bank_transfer || "Make a transfer or deposit to the details below"}</p>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Recipient</span>
                  {selectedBank?.recipient}
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Account Number</span>
                  <div className="flex items-center justify-center gap-2">
                    {selectedBank?.number}
                    <MdCopyAll onClick={() => copy(selectedBank?.number || '')} className='text-xl cursor-pointer text-primary' />
                  </div>
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Account Type</span>
                  {selectedBank?.type}
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Bank</span>
                  {selectedBank?.name}
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Branch</span>
                  {selectedBank?.branch}
                </div>
                <div className="flex items-center justify-between w-full gap-8 p-2 text-center rounded-md">
                  <span>Reernce</span>
                  {selectedBank?.reference}
                </div>
                <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={() => setStep(4)}>{t?.next || "Next"}</button>
              </div>
            }
                  
            </div>
            <div className="flex-1 rounded-md shadow-md min-h-[350px]">
              <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
       <div>
         <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            {t?.payment_proof || "Payment Proof"}
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='p-3 rounded-md' placeholder='Enter Amount' />
              <select onChange={(e) => setPaymentMethod(e.target.value)} className='p-3 rounded-md' name="" id="">
              <option value="">{t?.choose_method || "Choose a payment method"}</option>
                {wallets?.map(wallet => 
                  <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                )}
                 {banks?.map(bank => 
                  <option key={bank._id} value={bank.name}>{bank.name}</option>
                )}
              </select>
              <input onChange={e => uploadImage(e.target.files![0])} type="file" className='rounded-md' placeholder='Upload' />
          <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleDeposit}>{t?.submit || "Submit"}</button>
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

export default Deposit