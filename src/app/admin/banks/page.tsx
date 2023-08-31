'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import useMutation from '@/hooks/useMutation'
import { IBank } from '@/interfaces'
import { apiGetBanks, apiUpdateBank } from '@/services/AdminService'
import useFetch from '@/hooks/useFetch'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'


const Banks = () => {
  // const { data } = useSession()
  const { data: banks, error, isLoading, isFetching, refetch, fetchStatus } = useFetch<IBank[]>({api: apiGetBanks, key: ['AdminBanks'] })
  const [data, setData] = React.useState<IBank[]>([])

  useEffect(() => {
    if (banks) {
      setData(banks)
    }
  }, [banks])

  const updateBankMutation = useMutation<IBank, any>(apiUpdateBank, {
    onSuccess: (data) => {
      refetch()
      toast.success('Bank Updated Successfully')
      console.log({updatedata: data})
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'An error occured')
      console.log(error)
    }   
  })

  // console.log( { banks  })

  const handleUpdate = (bank: IBank) => {
    updateBankMutation.mutate(bank)
  }

  const handleBankName = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          name: e.target.value
        }
      }
      return b
    }))
  }

  const handleAccountNumber = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          number: e.target.value
        }
      }
      return b
    }))
  }

  const handleBankType = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          type: e.target.value
        }
      }
      return b
    }))
  }
  const handleBankRecipient = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          recipient: e.target.value
        }
      }
      return b
    }))
  }
  const handleBankBranch = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          branch: e.target.value
        }
      }
      return b
    }))
  }
  const handleBankReference = (e: React.ChangeEvent<HTMLInputElement>, bank: IBank) => {
    setData(prev => prev.map((b) => {
      if (b._id === bank._id) {
        return {
          ...b,
          reference: e.target.value
        }
      }
      return b
    }))
  }
  

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        updateBankMutation.isLoading && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Banks Admin</h2>
        <div className="flex flex-col gap-4">
          {
            data.map((bank, index) => (
              <>
              {
                bank.special ?   <div key={index} className="flex flex-col gap-2 p-4">
                <h2 className='py-2 text-2xl border-b border-black'>{bank.name}</h2>
                <div className="flex flex-col max-w-xs gap-4 pt">
                  <div className="flex flex-col gap-1">
                    <span>Name </span>
                    <input type="text" value={bank.name} onChange={(e) => handleBankName(e, bank)} name="name" id="name" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Email/Phone/Tag</span>
                    <input type="text" value={bank.number} onChange={(e) => handleAccountNumber(e, bank)} name="Account" id="Account" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                      <span>Type</span>
                      <input type="text" value={bank.type} onChange={(e) => handleBankType(e, bank)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                    </div>
                </div>
                <button onClick={() => handleUpdate(bank)} className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
              </div>
                : 
                  <div key={index} className="flex flex-col gap-2 p-4">
                    <h2 className='py-2 text-2xl border-b border-black'>{bank.name}</h2>
                    <div className="flex flex-col max-w-xs gap-4 pt">
                      <div className="flex flex-col gap-1">
                        <span>Name </span>
                        <input type="text" value={bank.name} onChange={(e) => handleBankName(e, bank)} name="name" id="name" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>Account Number</span>
                        <input type="number" value={bank.number} onChange={(e) => handleAccountNumber(e, bank)} name="Account" id="Account" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>Type</span>
                        <input type="text" value={bank.type} onChange={(e) => handleBankType(e, bank)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>Recipient</span>
                        <input type="text" value={bank.recipient} onChange={(e) => handleBankRecipient(e, bank)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>Branch</span>
                        <input type="text" value={bank.branch} onChange={(e) => handleBankBranch(e, bank)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>Reference</span>
                        <input type="text" value={bank.reference} onChange={(e) => handleBankReference(e, bank)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                      </div>
                    </div>
                    <button onClick={() => handleUpdate(bank)} className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
                  </div>
              }
              </>
            ))}
        </div>
    </main>
  )
}

export default Banks