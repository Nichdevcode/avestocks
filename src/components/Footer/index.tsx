'use client'
import React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { BiLocationPlus, BiPhone } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
// import Loader from '../Loader'
import { useTranslation } from '@/hooks/useTranslationContext'
import { ILanguage, languageCodes } from '@/interfaces'
import { IPageContent } from '@/dictionaries/header'
import { HeaderContent } from '@/dictionaries/header'

const Footer = () => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { language, setLanguage } = useTranslation()

  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
      setTranslated(HeaderContent[language])
    }, [language])

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Email submitted successfully");
      setEmail('')
    }, 2000)
    console.log(email)
  }

  return (
      <footer className='text-black bg-white pb-14'>
        {/* {loading && <Loader loader={4} />} */}
        <div className='flex items-center justify-between gap-8 py-2 border-y-2 border-[#D3DAE6] px-8 md:px-10 lg:px-24 mb-12 sm:mb-28'>
          <h3 className='font-semibold text-center text-primary'>Avestock 2023</h3>
          <nav className="items-center hidden sm:flex gap-x-14 md:gap-4 lg:gap-7">
            <ul className='flex items-center gap-3 text-sm md:gap-4 lg:gap-7 opacity-80'>
              <li><Link href="/" className={`text-green font-medium`}>{t?.home || "Home"}</Link></li>
              <li><Link href="/about" className={`text-green font-medium`}>{t?.about || "ABOUT"}</Link></li>
              <li><Link href="/" className={`text-green font-medium`}>{t?.contact || "Contact"}</Link></li>
              <li><Link href="/login" className={`text-green font-medium`}>{t?.login || "Login"}</Link></li>
              <li><Link href="/register" className={`text-green font-medium`}>{t?.register || "register"}</Link></li>
            </ul>
          </nav>
        </div>
        <div className='justify-between px-8 md:px-10 lg:px-24 sm:flex sm:w-11/12'>
          <div className='flex justify-between gap-8 mb-8 lg:gap-32'>
            <div>
              <h4 className='text-sm font-medium mb-7 text-primary'>{t?.other_page || "Other pages"}</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li>
                  <Link href={"/faqs"}>{t?.faq || "FAQ"}</Link>
                  </li>
                <li>
                  <Link href={"/terms"}>
                    {t?.terms || "Terms of service"}
                  </Link>
                </li>
                <li>
                  <Link href={"/privacy"}>
                    {t?.privacy || "Privacy policy"}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-medium mb-7 text-primary'>{t?.contact_us || "Contact Info"}</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li className='flex items-center gap-3'> 
                  <BiLocationPlus />
                  <span>level 28, One International Tower, 2000 Barangaroo Avenue, 2000 Sydney, AUSTRALIA, NSW.</span>
                </li>
                <li className='flex items-center gap-3'> 
                  <BiPhone />
                  <span>+1(345) 453 ****</span>
                </li>
                <li className='flex items-center gap-3'> 
                  <MdOutlineEmail />
                  <span>support@avestocks.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-8'>
            <h4 className='mb-2 font-medium text-25 text-primary'>{t?.up_to_date || "Stay Updated"}</h4>
            <span className='text-xs text-footer-gray'>{t?.close_watch ||"Keep a close watch on your favourite Currencies"}</span>
            <div onClick={handleSubmit} className='flex text-xs mt-7'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='w-full p-2 px-3 text-xs border-2 border-r-0 rounded-tl-md rounded-bl-md border-gray' />
              <button type={'submit'} className='rounded-tr-md rounded-br-md py-1.5 px-5 text-xs bg-primary text-white'>
                {t?.submit || "Submit"}
              </button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer