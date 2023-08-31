'use client'
import GentleLoader from '@/components/GentleLoader'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import useMutations from '@/hooks/useMutation'
import { IApproveDeposit, IDeposit, ITableColumn } from '@/interfaces'
import { apiAprroveDeposit, apiGetDeposits } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'


const AdminDeposit = () => {
  // const { data } = useSession()
  const { data: deposits, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IDeposit[]>({api: apiGetDeposits, key: ['Admindeposits'] })

  // console.log( { deposits  })

  const approveDepositMutation = useMutations<IApproveDeposit, any>(apiAprroveDeposit, {
    onSuccess: (data) => {
      // console.log(data)
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      // console.log(error)
      toast.error(error?.response?.data?.message || "An Error Occurred!");
    }   
  })

  const approveDepositHandler = (id: string) => {
    approveDepositMutation.mutate({ _id: id, status: 'approved' })
  }

  const denyDepositHandler = (id: string) => {
    approveDepositMutation.mutate({ _id: id, status: 'denied' }) 
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
      name: 'wallet',
      label: 'Wallet',
    },
    {
      name: 'proof',
      label: 'Proof',
      extra: true,
      custom: (val: string, meta: IDeposit) => {
        return  (
          <a href={meta?.proof} target="_blank" className="underline cursor-pointer text-primary underline-offset-1">
            <span className="text-sm">view</span>
          </a>
        )
      }
    },
    {
      name: 'status',
      label: 'Status',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p className={`font-medium ${val === 'processing' ? 'text-yellow-500' : val === 'approved' ? 'text-green-500' : 'text-red-500'}`}>{val}</p>
        )
      }
    },
    {
      name: 'createdAt',
      label: 'Created At',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: IDeposit) => {
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
      custom: (val: string, meta: IDeposit) => {
        // console.log({ val, meta })

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => approveDepositHandler(meta?._id!)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Approve</button>
              <button onClick={() => denyDepositHandler(meta?._id!)} className='border-red-200 border px-2 py-1.5 rounded-md text-red-500'>Deny</button>
            </div>
        )
      }
    }
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
       {
        (approveDepositMutation?.isLoading) && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Deposit</h2>
        <div className='mb-6'>
          <Table data={deposits || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default AdminDeposit