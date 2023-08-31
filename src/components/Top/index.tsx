import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Button from '../Button'
import { useRouter } from "next/navigation";
import Bg1 from "@/assets/bg1.jpg"
import Bg2 from "@/assets/bg2.jpg"
import Bg3 from "@/assets/bg3.jpg"
import Bg4 from "@/assets/bg4.jpg"
import CryptImage from '@/assets/cryp.png'
import InvestImg from '@/assets/invest5.svg'


  
const carouselData = [
  {
      id: 1,
      heroImg: Bg1,
      title: 'Welcome to AveStock',
      text: 'Are you ready to take control of your financial destiny? With AveStock by your side, you have the tools, expertise, and guidance you need to harness your trading potential and achieve your financial goals.',
  },
  {
      id: 2,
      heroImg: Bg2,
      title: 'Trade with Confidence',
      text: 'Experience the thrill of trading with unwavering confidence. At AveStock, we provide you with the knowledge and support required to navigate the markets successfully, ensuring every trade you make is a step towards financial prosperity.'
  },  
  {
      id: 3,
      heroImg: Bg3,
      title: 'Your Journey Starts Here',
      text: "Embark on a transformative journey into the world of trading with AveStock. Whether you're an experienced trader or just starting, our platform equips you with personalized strategies and comprehensive resources to kickstart your journey towards profitability.",
  },
  {
      id: 4,
      heroImg: Bg4,
      title: 'Transform Your Future',
      text: "Empower yourself to shape a brighter future through trading with AveStock. We're not just a platform; we're your dedicated partner in building wealth, providing you with cutting-edge tools and a supportive community as you forge your path to financial freedom",
  },
]

const Top = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const carouselInnerRef = React.useRef<HTMLDivElement[]>([])
  const router = useRouter()

  
  const handleClick = (id: any) => {
    router.push(`/products/${id}`)
  }
  
 
  useEffect(() => {  
    // fade in and out carousel automatically
    const handleCarousel = () => {
      const carousel = carouselRef.current;
      if (!carousel) return
      const carouselItems = carouselInnerRef.current;
      if (!carouselItems) return
      
      let counter = 0
      const timer = setInterval(() => {
          // console.log("fired", counter, carouselItems.length)
          carouselItems?.forEach(item => {
              item.classList.remove('active')
          })
          carouselItems[counter].classList.add('active')
          counter++
          // console.log({counter})
          if (counter > carouselItems.length - 1) {
              counter = 0
          }
      }, 7000)
      return timer
    }

    const timer = handleCarousel()

    return () => {
      clearInterval(timer)
    }

  }, [carouselRef])


  return (
    <div className='flex flex-col'>
        <div>
            dadsf
            dadsf
        </div>
        <div>
            dadsf
            dadsf
        </div>
        <div>
            dadsf
            dadsf
        </div>
        <div>
            dadsf
            dadsf
        </div>
       
    </div>
  )
}

export default Top