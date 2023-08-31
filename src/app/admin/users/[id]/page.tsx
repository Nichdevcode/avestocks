'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import { IHandleInvest, IInvest, IPlan, ITableColumn } from '@/interfaces'
import { apiInvest, apiGetPlans, apiGetUserInvestments, apiUpdateInvest } from '@/services/UserService'
import React, { useMemo } from 'react'
import usePost from '@/hooks/useMutation'
import { formatDate } from '@/utils/dateFunc'
import { useAuthContext } from '@/hooks/useAuthContext'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
import RealTimeProfitDisplay from '@/components/RealTimeProfitDisplay'
import { apiGetUser, apiUpdateUser } from '@/services/AuthService'
import { useParams } from 'next/navigation'
import currenciesData from '@/lib/currencies.json'
import useMutations from '@/hooks/useMutation'
import { apiHandleInvest } from '@/services/AdminService'


interface IUserInfo {
  balance: string
  total_earnings: string
  bonus: string
}

interface IUserInfo2 {
  balance: number
  total_earnings: number
  bonus: number
}


const Invest = () => {
  const { id } = useParams()
  const [amount, setAmount] = React.useState('')
  const [meta, setMeta] = React.useState<IInvest | null>(null)
  const [modalOpen, setModalOpen] = React.useState(false)

  const [userInfo, setUserInfo] = React.useReducer((state: IUserInfo, newState: Partial<IUserInfo>): IUserInfo => ({ ...state, ...newState }), {
    balance: '',
    total_earnings: '',
    bonus: '',
  })
  
  const { data: plans, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IPlan[]>({api: apiGetPlans, key: ['plans'] })
  
  const { data: userDetails, refetch: refetchUser } = useFetch({ 
    api: apiGetUser, 
    key: ['userDetails'],
    param: {
      id
    },
  })

  
  React.useEffect(() => {
    if (userDetails) {
      setUserInfo({
        balance: String(userDetails?.balance),
        total_earnings: String(userDetails?.total_earnings),
        bonus: String(userDetails?.bonus)
      })
    }
  }, [userDetails])

  const symbol = useMemo( () =>  currenciesData?.currencies?.find((currency) => currency?.code === userDetails?.currency) , [userDetails?.currency])

  const { data: investments, error: investmentError, isLoading: investMentLoading, refetch } = useFetch<IInvest[]>({
    api: apiGetUserInvestments, 
    param: id, 
    key: ['investments'] 
  })

  const investMutation = usePost<IInvest, any>(apiInvest, {
    onSuccess: (data) => {
      // console.log(data)
      refetch()
      toast.success('Investment Successful')
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Something went wrong')
      console.log(error)
    }   
  })

  
  const approveInvestMutation = useMutations<IHandleInvest, any>(apiHandleInvest, {
    onSuccess: (data) => {
      console.log(data)
      toast.success('Operation Successful')
      refetch()
      refetchUser()
    },
    onError: (error) => {
      // console.log(error)
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }   
  })
  
  const changeInvestAmountMutation = useMutations<{ _id: string, amount: number }, any>(apiUpdateInvest, {
    onSuccess: (data) => {
      console.log(data)
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      // console.log(error)
      toast.error(error?.response?.data?.message || 'Something went wrong')
    }   
  })

  

  const updateUser = usePost<IUserInfo2, any>(apiUpdateUser, {
    id: userDetails?._id!,
    onSuccess: (data) => {
      console.log(data)
      toast.success('User Updated Successfully')
      refetchUser()
    },
    onError: (error) => {
      console.log(error)
      toast.error(error?.response?.data?.message || 'An error occured')
    }   
  })


  const approveInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'active' })
  }

  const pauseInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'paused' }) 
  }
  const completeInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'completed' }) 
  }

  const handleSelectInvest = (invest: IInvest) => {
    setMeta(invest)
    setModalOpen(true)
  }

  const columns: ITableColumn[] = [
    {
      name: 'amount',
      label: `Amount(${symbol?.symbol || "$"})`,
    },
    {
      name: 'plan',
      label: "Plan",
      extra: true,
      custom: (val: string, meta: any) => {
        const plan = plans?.find((plan) => plan._id === val)
        return  (
            <p>{plan?.name || val} Plan</p>
        )
      }
    },
    {
      name: 'status',
      label: 'Status',
      extra: true,
      custom: (val: string, meta: any) => {
        return (
          <p className={`px-2 py-1 text-xs rounded-md font-bold ${val === 'completed'
                ? 'text-yellow-500'
                : val === 'active'
                ? 'text-green-500'
                : 'text-red-500'}`}>{val === "paused" ? "..." : val }</p>
        )
      },
    },
    {
      name: 'profit',
      label: `Returns(${symbol?.symbol || "$"})`,
      extra: true,
      custom: (val: string, meta: IInvest) => {
        const plan = plans?.find(plan => plan._id == meta?.plan)
        const date = new Date(meta?.createdAt!)
        const startTime = date.getTime()
        const initialProfit = meta.amount
        return  (
          <div className="">
           { 
           meta.status === "paused" ? 
            <p>FRONZEN</p>
            :
            meta?.status === "completed" ?
            <p>
              {symbol?.symbol || "$"}{(meta.amount * plan?.roi!/100) + meta.amount}
            </p>
            :
           <RealTimeProfitDisplay 
              initialProfit={initialProfit} 
              startTime={startTime} 
              percentageProfit={Number(plan?.roi)!} 
              numberOfDays={plan?.duration!} 
              pause={meta?.pause}
              symbol={symbol?.symbol || "$"}
            />
            }
            </div>
        )
      },
    },
    {
      name: 'createdAt',
      label: 'Created At',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{formatDate(val)}</p>
        )
      },
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: IInvest) => {

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => pauseInvestHandler(meta?._id!)} className='border-red-200 border px-2 py-1.5 rounded-md text-red-500'>Pause</button>
              <button onClick={() => approveInvestHandler(meta?._id!)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Resume</button>
              <button onClick={() => completeInvestHandler(meta?._id!)} className='border-green-200 border px-2 py-1.5 rounded-md text-green-500'>Mark Complete</button>
            </div>
        )
      }
    },
    {
      name: 'updateBalance',
      label: 'Update Investment',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: IInvest) => {

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => handleSelectInvest(meta)} className='border-green-200 border px-2 py-1.5 rounded-md text-green-500'>Update Investment</button>
            </div>
        )
      }
    },
  ]

  const handleUpdateUser = () => {
    updateUser.mutate({
      balance: +userInfo?.balance,
      total_earnings: +userInfo?.total_earnings,
      bonus: +userInfo?.bonus,
    })
  }

  const handleCloseModal = (e: any) => {
    if (e.target.classList.contains('fixed')) {
      setModalOpen(false)
    }
  }
  
  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
       (investMutation?.isLoading || updateUser?.isLoading || approveInvestMutation?.isLoading || changeInvestAmountMutation?.isLoading) && <GentleLoader />
      }
      {
        modalOpen && 
          <div onClick={handleCloseModal} className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'>
            <div className='relative p-4 bg-white rounded-md'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center space-x-2'>
                  <input onChange={(e) => setAmount(e.target.value)} name='amount' id='amount' type="text" className='rounded-md placeholder:text-sm' placeholder='Amount' />
                  <button onClick={() => changeInvestAmountMutation.mutate({ _id: meta?._id!, amount: +amount })} className='border-green-200 border px-2 py-1.5 rounded-md text-green-500'>Update</button>
                </div>
              </div>
            </div>
          </div>
      }
      <h2 className='mb-2 text-lg font-semibold'>User:</h2>
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm text-gray-500'>{userDetails?.email}</p>
          </div>
        </div>
      </div>
      <div className='mb-6'>
        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col gap-2">
            <p className='text-xs'>Balance</p>
            <input value={userInfo?.balance} onChange={(e) => setUserInfo({'balance': e.target.value})} name='balance' id='balance' type="text" className='max-w-xl rounded-md placeholder:text-sm' placeholder='User Balance' />
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-xs'>Total Profit</p>
            <input value={userInfo?.total_earnings} onChange={(e) => setUserInfo({'total_earnings': e.target.value})} name='total_earnings' id='total_earnings' type="text" className='max-w-xl rounded-md placeholder:text-sm' placeholder='Total Profit' />
          </div>
          <div className="flex flex-col gap-2">
            <p className='text-xs'>Bonus</p>
            <input value={userInfo?.bonus} onChange={(e) => setUserInfo({'bonus': e.target.value})} name='bonus' id='bonus' type="text" className='max-w-xl rounded-md placeholder:text-sm' placeholder='Bonus' />
          </div>
          <button disabled={updateUser?.isLoading} onClick={handleUpdateUser} className='p-3 px-4 mt-4 text-white rounded-md cursor-pointer bg-primary md:w-fit'>Update User Account</button>
        </div>             
      </div>
      <h2 className='mb-6 text-lg font-semibold'>{"Live Investments"}</h2>
      <div className='mb-6'>
        <Table title={'Investments'} data={investments || []} columns={columns} />
      </div>
    </main>
  )
}

export default Invest