'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { MdLogout } from 'react-icons/md'
import { RiBankFill, RiTeamLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { LiaWalletSolid } from 'react-icons/lia'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { IoIosOptions } from 'react-icons/io'
import { BsBarChart } from 'react-icons/bs'
import Logo from "@/assets/logo3.png"
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import { useAuthContext } from '@/hooks/useAuthContext'

// import { useSession, signIn, signOut } from "next-auth/react"


const SideNav = ({ }) => {
    const pathname = usePathname();
    // console.log({pathname})
    const { dispatch } = useAuthContext()

    const router = useRouter()

    const handleLogout = () => {
        dispatch({type: "LOGOUT", payload: null})
        router.push('/login')
    }
    

  return (
    <div className='no-scrollbar hidden sm:flex flex-col justify-between grad-to-bottom max-h-screen overflow-hidden h-screen min-w-[240px] w-60 pb-4 grad-to-right text-white'>
        <div>
            <div className='flex flex-col items-center w-full gap-5 py-5 text-center border-b border-white/10'>
                <Link href={"/admin/"} className='text-2xl font-semibold'>
                    <Image src={Logo} className='w-full h-14 md:h-14' alt='Avestock' />
                    {/* Avestock */}
                </Link>
            </div>
            <div className='flex flex-col gap-2 pt-12 pb-2'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/admin') && 'font-bold'}`} href="/admin">
                    <FiUsers size={"1.3rem"} />
                    Manage Users
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("wallets") && 'font-bold'}`} href={"/admin/wallets"}>
                    <LiaWalletSolid size={"1.3rem"} />
                    Manage Wallets
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("banks") && 'font-bold'}`} href={"/admin/banks"}>
                    <RiBankFill size={"1.3rem"} />
                    Manage Banks
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("trades") && 'font-bold'}`} href={"/admin/trades"}>
                    <BsBarChart size={"1.3rem"} />
                    Manage Trades
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("deposit") && 'font-bold'}`} href={"/admin/deposit"}>
                    <RiLuggageDepositLine size={"1.3rem"} />
                    Manage Deposit
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("withdrawal") && 'font-bold'}`} href={"/admin/withdrawal"}>
                    <BiMoneyWithdraw size={"1.3rem"} />
                    Manage Withdrawal
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("plans") && 'font-bold'}`} href={"/admin/plans"}>
                    <IoIosOptions size={"1.3rem"} />
                    Manage Plans
                </Link>
            </div>
        </div>
        <div className='flex flex-col gap-10 pb-2 underline'>
            <div onClick={handleLogout} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
                <MdLogout size={"1.3rem"} />
                Logout
            </div>
        </div>
    </div>
  )
}

export default SideNav