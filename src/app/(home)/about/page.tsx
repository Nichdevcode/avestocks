"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import MisionImg from '@/assets/mission.svg'
import VisionImg from '@/assets/vision.svg'
import { useTranslation } from '@/hooks/useTranslationContext'
import { IPageContent } from '@/dictionaries/about'
import { AboutContent } from '@/dictionaries/about'
import { useEffect, useState } from 'react'

const joinUsImages  = [
  MisionImg,
  VisionImg,
] 

const AboutUs = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = useState<IPageContent | null>(null)

  useEffect(() => {
    setTranslated(AboutContent[language])
  }, [language])

  // if (!t) return null
  return (
    <div className='overflow-hidden'>
        <Header />
        <section className='flex flex-col items-center justify-center gap-3 px-12 pt-40 text-center text-white bg-white py-28 lg:px-24 grad-to-right'>
            <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">{t?.title || "About Us"}</h1>
            <p className='max-w-lg text-sm'>{t?.content || "Empowering Financial Growth Through Expertise, Innovation, and Community Engagement: Discover the Heart of Avestock"}</p>
        </section>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>{t?.joinUs?.title || "Empowering Your Financial Journey"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.joinUs?.content || "Join us on this journey towards financial growth and prosperity"}.</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2'>
            {
              t?.joinUs?.subsections.map((item, index) => (
                <div key={index} data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
                  <div className="flex-[0_0_48px] w-12 h-12 relative">
                    <Image src={joinUsImages[index]} alt={item.title} className='absolute w-full h-full' />
                  </div>
                  <span className='text-lg font-semibold text-black'>{item.title}</span>
                  <span>{item.content}</span>
                </div>
              )
            )}
          </div>
        </section>
        <section className='px-12 py-20 text-white grad-to-right lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>{t?.history?.title || "Our Trading Company In Numbers"}</h2>
            <p className='max-w-lg text-sm md:text-base'>{t?.history?.content || "Trace the history of our company since its foundation in 2016"}</p>
          </div>
          <div className='flex flex-col flex-wrap items-center justify-center gap-3 text-center md:flex-row'>
            {
              t?.history?.subsections.map((item, index) => (
                <div key={index} data-aos="slide-up" className="flex flex-col w-full min-w-[300px] max-w-sm gap-3 p-6 rounded-md shadow-md">
                  <span className='text-lg font-semibold text-primary'>{item.title}</span>
                  <span>{item.content}</span>
                </div>
              )
            )}
          </div>
        </section>
      
        <Footer />
    </div>
  )
}

export default AboutUs