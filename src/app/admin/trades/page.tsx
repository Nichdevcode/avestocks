'use client'
import GentleLoader from '@/components/GentleLoader'
import RealTimeProfitDisplay from '@/components/RealTimeProfitDisplay'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import useMutations from '@/hooks/useMutation'
import { ITableColumn, IInvest, IHandleInvest, IPlan } from '@/interfaces'
import { apiGetInvestments, apiGetPlans, apiHandleInvest } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'


const Trades = () => {
  // const { data } = useSession()
  const { data: investments, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IInvest[]>({api: apiGetInvestments, key: ['Admininvestments'] })
  const { data: plans } = useFetch<IPlan[]>({api: apiGetPlans, key: ['AdminPlans'] })
  // console.log( { investments  })

   const approveInvestMutation = useMutations<IHandleInvest, any>(apiHandleInvest, {
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

  const approveInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'active' })
  }

  const pauseInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'paused' }) 
  }
  const completeInvestHandler = (id: string) => {
    approveInvestMutation.mutate({ _id: id, status: 'completed' }) 
  }

  const columns: ITableColumn[] = [
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'amount',
      label: "Amount",
    },
    {
      name: 'plan',
      label: 'Plan',
    },
    {
      name: 'status',
      label: 'Status',
      extra: true,
      custom: (val: string, meta: IInvest) => {
        return  (
            <p className={`font-medium ${val === 'completed' ? 'text-yellow-500' : val === 'active' ? 'text-green-500' : 'text-red-500'}`}>{val}</p>
        )
      }
    },
    {
      name: 'profit',
      label: 'Returns($)',
      extra: true,
      custom: (val: string, meta: IInvest) => {
        // interface IRealTimeProfitDisplayProps {
        //   startDate: Date;
        //   initialProfit: number;
        //   percentageProfit: number;
        //   numberOfDays: number;
        // }
        const plan = plans?.find(plan => plan._id == meta?.plan)
        console.log("plan exist", plan)
        const date = new Date(meta?.createdAt!)
        const startTime = date.getTime()
        const initialProfit = meta.amount
        console.log(val, meta)
        return  (
          <>
           { 
           meta.status === "paused" ? 
            <p>FRONZEN</p>
            :
            meta?.status === "completed" ?
            <p>
              {(meta.amount * plan?.roi!/100) + meta.amount}
            </p>
            :
           <RealTimeProfitDisplay 
              initialProfit={initialProfit} 
              startTime={startTime} 
              percentageProfit={Number(plan?.roi)!} 
              numberOfDays={plan?.duration!} 
              symbol=""
              pause={meta?.pause}
            />
            }
          </>
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
      }
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
    }
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
       {
        (approveInvestMutation?.isLoading) && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Trades</h2>
        <div className='mb-6'>
          <Table data={investments || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Trades