'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import useMutation from '@/hooks/useMutation'
import { IUser, ITableColumn, IVerifyUser, IId } from '@/interfaces'
import { apiDeleteUser, apiGetUsers, apiVerifyUser } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
import { toast } from 'react-toastify'
import GentleLoader from "@/components/GentleLoader"
import Link from "next/link"
// import { useSession } from 'next-auth/react'


const Admin = () => {
  // const { data } = useSession()
  const { data: users, error, isLoading, isFetching, refetch, fetchStatus } = useFetch<IUser[]>({
    api: apiGetUsers, 
    key: ['users'],
    requireAuth: true,
  })
  const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null)
  const [userOpen, setUserOpen] = React.useState(false)

  // console.log( { users  })

  const verifyUser = useMutation<IVerifyUser, any>(apiVerifyUser, {
    onSuccess: (data) => {
      // console.log(data)
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      // console.log(error)
      toast.error(error?.response?.data?.message || 'An error occured')
    }   
  })

  const deleteUserMutation = useMutation<IId, any>(apiDeleteUser, {
    onSuccess: (data) => {
      // console.log({ data })
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'An error occured')
    }   
  })

  const verifyUserHandler = (id: string) => {
    verifyUser.mutate({ _id: id, status: 'verified' })
  }

  const denyUserHandler = (id: string) => {
    verifyUser.mutate({ _id: id, status: 'failed' }) 
  }
  
  const handleSelectUser = (user: IUser) => {
    setSelectedUser(user)
    setUserOpen(true)
  }

  // console.log({users})

  const columns: ITableColumn[] = [
    {
      name: 'email',
      label: 'Email',
      extra: true,
      custom: (val: string, meta: IUser) => {
        return  (
          <Link href={`/admin/users/${meta?._id}`} className='underline cursor-pointer text-primary underline-offset-1'>{val}</Link>
        )
      }
    },
    {
      name: 'first_name',
      label: "First Name",
    },
    {
      name: 'last_name',
      label: 'Last Name',
    },
    {
      name: 'phone',
      label: 'Phone Number',
    },
    {
      name: 'status',
      label: 'Status',
      extra: true,
      custom: (val: string, meta: IUser) => {
        return  (
          <p className={`${val === 'verified' ? 'text-green-500' : val === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{val}</p>
        )
      }
    },
    {
      name: 'document',
      label: 'Document',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: IUser) => {
        return  (
          <>
         {meta?.document?.front 
          ?
            <div className='flex items-center space-x-2'>
              <a href={meta?.document?.front} target="_blank" className="underline cursor-pointer text-primary underline-offset-1">
                <span className="text-sm">front</span>
              </a>
              <a href={meta?.document?.back} target="_blank" className="underline cursor-pointer text-primary underline-offset-1">
                <span className="text-sm">back</span>
              </a>
            </div>
          :
            <p>Not uploaded</p>
          }
          </>
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
      custom: (val: string, meta: IUser) => {
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
      custom: (val: string, meta: IUser) => {
        // console.log({ val, meta })

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => verifyUserHandler(meta?._id!)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Verify</button>
              <button onClick={() => denyUserHandler(meta?._id!)} className='border-red-200 border px-2 py-1.5 rounded-md text-red-500'>Deny</button>
              {/* view user details */}
              <button onClick={() => handleSelectUser(meta)} className='text-white bg-primary px-2 py-1.5 rounded-md'>View User Details</button>
              <button onClick={() => deleteUserMutation.mutate({ _id: meta?._id! })} className='text-white bg-red-500 px-2 py-1.5 rounded-md'>Delete</button>
            </div>
        )
      }
    }
  ]

  // console.log({ selectedUser })

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        (verifyUser?.isLoading || deleteUserMutation?.isLoading) && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Users</h2>
        <div className='mb-6'>
          <Table title='Users' data={users || []} columns={columns} colspan={8} />
        </div>
        {
          userOpen && 
          <div className="fixed top-0 left-0 z-40 w-full h-full overflow-x-hidden overflow-y-auto outline-none">
          <div 
            className='sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto overflow-scroll'
          >
            <div className='relative flex flex-col w-full p-4 overflow-scroll bg-white rounded-md'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>User Details</h2>
                <button onClick={() => setUserOpen(false)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Close</button>
              </div>
              <div className='flex flex-col gap-4'>
                {
                  selectedUser && (
                    Object.keys(selectedUser).map((key, index) => {
                      // console.log({ key, index })
                      if (true) {
                        console.log(1)
                        return <div key={key} className='flex flex-col gap-2'>
                          <p className='font-semibold'>{key}</p>
                          <p>{String(selectedUser[key as keyof IUser])}</p>
                        </div>
                      }
                      return <></>
                      }
                    )
                  )
                }
              </div>
            </div>
                
                  
          </div>
          </div>
        }
    </main>
  )
}

export default Admin