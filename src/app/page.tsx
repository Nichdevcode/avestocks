'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import MonitorImg from '@/assets/monitor.svg'
import { GiCheckMark } from 'react-icons/gi'
import Footer from '@/components/Footer'
import FundImg from '@/assets/fund.svg'
import RegImg from '@/assets/reg.svg'
import TradeImg from '@/assets/trade.svg'
import DiverseImg from '@/assets/diversify.svg'
import ArmImg from '@/assets/arm-flex-outline.svg'
import ToolsImg from '@/assets/tools.svg'
import SecurityImg from '@/assets/account-lock.svg'
import Face1Img from '@/assets/face1.png'
import Face2Img from '@/assets/face2.png'
import Face3Img from '@/assets/face3.png'
import Face4Img from '@/assets/face4.png'
import Face5Img from '@/assets/face5.png'
import Face6Img from '@/assets/face6.jpg'
import Face7Img from '@/assets/face7.png'
import { useTranslation } from '@/hooks/useTranslationContext'
import { LanguageData } from '@/interfaces/home'
import { HomeData } from '@/dictionaries/home'
import useFetch from '@/hooks/useFetch'
import { IPlan } from '@/interfaces'
import { apiGetPlans } from '@/services/AdminService'
import { TickerTape } from "react-ts-tradingview-widgets";

import { Ticker } from "react-ts-tradingview-widgets";


const stepsImg = [
  RegImg,
  FundImg,
  TradeImg,
  MonitorImg,
]

const qualitiesImg = [
  DiverseImg,
  ArmImg,
  ToolsImg,
  SecurityImg,
]

const facesImg = [
  Face1Img,
  Face2Img,
  Face3Img,
  Face4Img,
  Face5Img,
  Face6Img,
  Face7Img,
]


export default function Home() {
  const { language } = useTranslation()
  const [t, setTranslated] = useState<LanguageData | null>(null)

  const { data: plans, error, isLoading, isFetching, refetch, fetchStatus } = useFetch<IPlan[]>({api: apiGetPlans, key: ['AdminPlans'] })

  useEffect(() => {
    setTranslated(HomeData[language])
  }, [language])

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  
  return (
    <div className=''>
      <Header />
      <main className="">
        <Hero t={t} />
        <TickerTape colorTheme="light"></TickerTape>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>{t?.howItWorks.title || "How It Works"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.howItWorks.content ||  "Get involved in our tremendous platform and Invest. We will utilize your money and give you profit in your wallet automatically."}</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {
              t?.howItWorks?.steps.map((el, i) =>
                <div key={i} data-aos="slide-up" className="flex items-center gap-4">
                  <div className="flex-[0_0_48px] w-12 h-12 relative">
                    <Image src={stepsImg[i]} alt='register' className='absolute w-full h-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className='font-semibold'>{el.title}</p>
                    <p className='text-sm'>{el.description}</p>
                  </div>
                </div>
              )
            }
          </div>
        </section>
        <section className='px-12 py-20 text-white grad-to-right lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>{t?.investmentPlans.title ||  "Our Investment Plans"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.investmentPlans.content || "Unlocking Investment Potential: Seamlessly Grow Your Wealth with Automated Profit Generation"}</p>
          </div>
          <div className='flex flex-col flex-wrap items-center justify-center gap-5 mb-8 md:flex-row text-primary'>
            {
               plans?.map((el, i) => 
              <div key={i} data-aos="slide-up" className="flex flex-col gap-3 p-6 border rounded-md shadow-lg shadow-black w-72 border-primary">
                <span className='text-xs'>{el.name}</span>
                <div className='flex flex-col mb-4 text-2xl font-semibold leading-none'>${el.minimum}<span className='text-xs font-semibold'>min</span></div>
                <div className="flex flex-col gap-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>{el.roi}% ROI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>
                      {el.minimum} - {el.maximum} USD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>
                      {el.duration} days
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>
                      principal returned
                    </span>
                  </div>
                </div>
                <button className='p-2 mt-2 text-sm font-bold text-black rounded-md bg-primary'>{t?.investmentPlans?.cta}</button>
              </div>
            )}
          </div>
        </section>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>{t?.investmentPlans.title || "What makes Avestock Trades stand out?"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.qualities?.title || "Unveiling the Unique Qualities That Elevate Avestock Trades to Prominence in the Investment Landscape"}</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            {
              t?.qualities?.tools.map((el, i) =>
                <div key={i} data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
                  <div className="flex-[0_0_48px] w-12 h-12 relative">
                    <Image src={qualitiesImg[i]} alt='register' className='absolute w-full h-full' />
                  </div>
                  <span className='text-lg font-semibold text-black'>{el.title}</span>
                  <span>{el.content}</span>
                </div>
              )
            }        
          </div>
        </section>
        <section className='px-12 py-20 text-white lg:px-24 grad-to-right'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>{t?.cryptocurrencies?.title || "Top 8 cryptocurrency, Subscribe and start earning"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.cryptocurrencies?.content || "Exploring the Leading 8 Cryptocurrencies: Subscribe Now to Ignite Your Earnings"}</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITSTAMP%3AETHUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3ALTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AXRPUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITMEX%3AXBTUSDTM2023%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOTUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOGEBTC%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOGEUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
          </div>
        </section>
        <section  className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>{t?.customerTestimonials?.title || "What Our Customers Say"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.customerTestimonials?.content || "Our customers from all over the world share their lovely words about us"}</p>
          </div>
          <div className='flex flex-col flex-wrap items-center justify-center gap-5 mb-8 md:flex-row'>
            {
              t?.customerTestimonials?.testimonials.map((el, i) =>
                <div key={i} data-aos={i % 2 === 0 ? 'slide-right' : 'slide-left'} className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                  <Image src={facesImg[i]} alt='register' className='rounded-full w-28 h-28' />
                  <span className='text-lg font-medium'>{el.name}</span>
                  <span>{el.testimonial}</span>
                </div>
              )
            }
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
