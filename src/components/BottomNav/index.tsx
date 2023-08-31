'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { BsBarChart } from 'react-icons/bs'
import { useTranslation } from '@/hooks/useTranslationContext'
import { IPageContent } from '@/dictionaries/dashboard/header'
import { HeaderContent } from '@/dictionaries/dashboard/header'


const BottomNav = () => {
  const pathname = usePathname()

  
  const { language } = useTranslation()

  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
      setTranslated(HeaderContent[language])
    }, [language])

  // console.log('path', pathname)

  return (
    <>
      <header className='fixed bottom-0 left-0 z-10 flex items-center justify-between w-full pt-2 text-white shadow-md grad-to-right md:py-5 md:px-10 lg:px-24 sm:hidden'>
        <nav className="flex items-center w-full gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex items-center justify-between w-full gap-2 text-xs font-medium text-dark-light md:gap-4 lg:gap-7'>
            <li className={`flex-1 ${pathname==="/dashboard" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center text-center`}>
                    <AiOutlineHome className='text-xl' />
                    {t?.home || "Home"}
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/accounts" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/accounts" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center text-center`}>
                    <MdOutlineDashboard className='text-xl' />
                    {t?.account || "account"}
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/invest" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/invest" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center text-center`}>
                    <BsBarChart className='text-xl' />
                    {t?.invest || "invest"}
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/deposit" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/deposit" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center text-center`}>
                    <RiLuggageDepositLine className='text-xl' />
                    {t?.deposit || "deposit"}
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/withdrawal" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/withdrawal" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center text-center`}>
                    <BiMoneyWithdraw className='text-xl' />
                    {t?.withdraw || "withdraw"}
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default BottomNav