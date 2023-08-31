'use client'
import React from 'react'
import SideNav from '@/components/SideNav'
import Head from '@/components/Head'
import AuthHOC from '@/HOC/AuthHOC'
import BottomNav from '@/components/BottomNav'
import ContextAuthHOC from '@/HOC/ContextAuthHOC'
import { TickerTape } from 'react-ts-tradingview-widgets'

const Layout = ({ children }: { children: React.ReactNode }) => { 
  

  return (
      <div className='flex w-full h-screen overflow-hidden'>
        <SideNav />
        <div className="relative flex-1 pb-10 overflow-hidden overflow-y-auto pt-14 sm:pt-8 sm:pb-0 hide-scroll sm:ml-60 bg-black/5">
          <Head />
         <TickerTape displayMode="regular" colorTheme="light"></TickerTape>
          {children}
        </div>
        {/* <div className="relative flex-1 pb-10 overflow-hidden overflow-y-auto">
          <Head />
          {children}
        </div> */}
        <BottomNav />
      </div>
  )
}

export default ContextAuthHOC(Layout)