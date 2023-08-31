'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiUsers } from 'react-icons/fi'
import { LiaWalletSolid } from 'react-icons/lia'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { BsBarChart } from 'react-icons/bs'
import { IoIosOptions } from 'react-icons/io'


const BottomNav = () => {
  const pathname = usePathname()

  // console.log('path', pathname)

  return (
    <>
      <header className='fixed bottom-0 left-0 z-10 flex items-center justify-between w-full pt-2 text-white shadow-md grad-to-right md:py-5 md:px-10 lg:px-24 sm:hidden'>
        <nav className="flex items-center w-full gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex items-center justify-between w-full gap-2 text-xs font-medium text-dark-light md:gap-4 lg:gap-7'>
            <li className={`flex-1 ${pathname==="/admin" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <FiUsers className='text-xl' />
                    Users
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/admin/wallets" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin/wallets" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <LiaWalletSolid className='text-xl' />
                    Wallets
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/admin/trades" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin/trades" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <BsBarChart className='text-xl' />
                    Trades
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/admin/deposit" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin/deposit" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <RiLuggageDepositLine className='text-xl' />
                    Deposits
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/admin/withdrawal" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin/withdrawal" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <BiMoneyWithdraw className='text-xl' />
                    Withdraws
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/admin/plans" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/admin/plans" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <IoIosOptions className='text-xl' />
                    Plans
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default BottomNav