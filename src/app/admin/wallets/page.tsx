'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import { apiGetWallets, apiUpdateWallet } from '@/services/AdminService'
import usePost from '@/hooks/useMutation'
import { IWallet } from '@/interfaces'
import useFetch from '@/hooks/useFetch'
import { set } from 'mongoose'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
import useImage from '@/hooks/useImage'
// import { useSession } from 'next-auth/react'


const Wallets = () => {
  // const { data } = useSession()
  const [data, setData] = React.useState<IWallet[]>([])
  const [qrCodeIndex, setQrCodeIndex] = React.useState('')

  const { data: wallets, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })

  // console.log("wallets", {wallets})

  const { url, uploadImage, error: errorImage, loading } = useImage()

  useEffect(() => {
    if (wallets) {
      setData(wallets)
    }
  }, [wallets])

  const updateWalletMutation = usePost<IWallet, any>(apiUpdateWallet, {
    onSuccess: (data) => {
      toast.success("wallet updated")
      refetch()
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "error updating wallet")
      console.log(error)
    }   
  })

  const handleWalletAddress = (e: React.ChangeEvent<HTMLInputElement>, wallet: IWallet) => {
    setData(prev => prev.map((w) => {
      if (w._id === wallet._id) {
        return {
          ...w,
          address: e.target.value
        }
      }
      return w
    }))
  }

  React.useEffect(() => {
    if (url) {
      setData(prev => prev.map((w) => {
        if (w._id === qrCodeIndex) {
          return {
            ...w,
            qr_code: url
          }
        }
        return w
      }))

    }
  }, [url])

  const handleWalletQr = (e: React.ChangeEvent<HTMLInputElement>, wallet: IWallet) => {
    console.log("loading image1", e.target.files![0])


    if (!wallet._id) {
      return
    }
    setQrCodeIndex(wallet._id)
    console.log("loading image", e.target.files![0])
    uploadImage(e.target.files![0])
  }

  const updateWallet = (wallet: IWallet) => {
    updateWalletMutation.mutate(wallet)
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
           {
            (updateWalletMutation?.isLoading || loading) && <GentleLoader />
          }
        <h2 className='mb-6 text-lg font-semibold'>Wallets Admin</h2>
        
        <div className="flex flex-col gap-10">
          {
            data?.map((wallet, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
                <span>{wallet.name} Wallet</span>
                <input value={wallet.address} onChange={(e) => handleWalletAddress(e, wallet)} type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                <span>{wallet.name} QR CODE</span>
                <input onChange={(e) => handleWalletQr(e, wallet)} type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                <Image alt={`${wallet.name} qr`} src={wallet?.qr_code} width={100} height={100} className='w-48 h-48 bg-gray-200' />
                <button className='p-2 px-4 mx-auto mt-4 text-white rounded-md w-fit bg-primary' onClick={() => updateWallet(wallet)}>Update</button>
              </div>
            ))
          }
        </div>
    </main>
  )
}

export default Wallets
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>BTC Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>BTC QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>ETH Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>ETH QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>BNB Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>BNB QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>SOL Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>SOL QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>