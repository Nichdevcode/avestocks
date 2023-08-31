'use client'
import { useAuthContext } from '@/hooks/useAuthContext'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RxCaretDown } from 'react-icons/rx'
// import Logo from "@/assets/losgo.jpg"


const AdminHead = () => {
  // const session = useSession()
  // const user = session.data?.user
  const router = useRouter()

  const { dispatch, user } = useAuthContext()
  const handleLogout = () => {
    dispatch({type: "LOGOUT", payload: null})
    router.push('/login')
}



  return (
    <div className='sticky top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 p-4 text-black bg-white shadow overflow-visibl sm:py-4 md:px-6'>
        {/* <input type="text" placeholder='Search' className='border border-gray-300 rounded-full px-4 min-w-[100px] md:w-96' /> */}
        <h1 className='font-semibold text-primary'>Dashboard</h1>
        {/* <Image src={Logo} className='w-12 h-8 md:h-8' alt='Avestock' /> */}

        <div className='flex items-center justify-between gap-2'>
          {/* <div className="w-4 h-4 bg-gray-200 rounded-full" /> */}
          <div className='flex items-center gap-2 text-xs'>
            <div className="w-6 h-6 rounded-full bg-primary/30" />
            <div className="flex-col hidden gap-1 md:flex">
              <div className='text-sm font-semibold'>{user?.last_name} {user?.first_name}</div>
              <div className='text-xs'>{user?.email}</div>
            </div>
            <div className='relative cursor-pointer group'>
              <RxCaretDown className='text-2xl text-gray-dark' />
              <div className='absolute right-0 flex-col hidden gap-2 pt-2 bg-white shadow-md top-6 group-hover:flex'>
                <Link href={`/admin/banks`} className='py-2 border-b-2 cursor-pointer sm:hidden'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                   Banks
                  </span>
                </Link>
                <div onClick={handleLogout} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Logout
                  </span>
                </div>
              </div>
            </div>
          
              {/* <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-gray-dark' /> */}
          </div>
        </div>
        {/* <Links isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  )
}

export default AdminHead