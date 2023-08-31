'use client'
import GentleLoader from '@/components/GentleLoader'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import useMutation from '@/hooks/useMutation'
import { IWithdrawal, ITableColumn, IWallet, IApproveWithdrawal } from '@/interfaces'
import { apiAprroveWithdrawal, apiGetWithdrawals } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'


const Withdrawal = () => {
  // const { data } = useSession()
  const { data: withdrawals, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IWithdrawal[]>({api: apiGetWithdrawals, key: ['Adminwithdrawals'] })

  const approveWithdraw = useMutation<IApproveWithdrawal, any>(apiAprroveWithdrawal, {
    onSuccess: (data) => {
      // console.log(data)
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      console.log(error)
      toast.error(error?.response?.data?.message || "An Error Occurred!");
    }   
  })

  const approveWithdrawHandler = (id: string) => {
    approveWithdraw.mutate({ _id: id, status: 'approved' })
  }

  const denyWithdrawalHandler = (id: string) => {
    approveWithdraw.mutate({ _id: id, status: 'denied' }) 
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
      name: 'type',
      label: 'Type',
    },
    {
      name: 'wallet',
      label: 'Wallet',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{val || "null"}</p>
        )
      }
    },
    {
      name: 'asset',
      label: 'Asset',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{val || "null"}</p>
        )
      }
    },
    {
      name: 'account_number',
      label: 'Account Number',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{val || "null"}</p>
        )
      }
    },
    {
      name: 'account_name',
      label: 'Account Name',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{val || "null"}</p>
        )
      }
    },
    {
      name: 'bank_name',
      label: 'Bank Name',
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{val || "null"}</p>
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
      custom: (val: string, meta: any) => {
        return  (
            <p>{formatDate(val)}</p>
        )
      }
    },
    {
      name: 'action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: IWallet) => {
        // console.log({ val, meta })

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => approveWithdrawHandler(meta?._id!)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Approve</button>
              <button onClick={() => denyWithdrawalHandler(meta?._id!)} className='border-red-200 border px-2 py-1.5 rounded-md text-red-500'>Deny</button>
            </div>
        )
      }
    }
  ]


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        (approveWithdraw?.isLoading) && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Withdrawal</h2>
        <div className='mb-6'>
          <Table data={withdrawals || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Withdrawal