'use client'
import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Logo1 from '@/assets/logo1.png'
import Logo2 from '@/assets/logo3.png'
import { useTranslation } from '@/hooks/useTranslationContext'
import { ILanguage, languageCodes } from '@/interfaces'
import { IPageContent } from '@/dictionaries/header'
import { HeaderContent } from '@/dictionaries/header'
const languages = [
  {
    id: 1,
    name: 'English',
    code: 'en',
  },
  {
    id: 2,
    name: 'Español', // Spanish
    code: 'es',
  },
  {
    id: 3,
    name: 'Chinese - 中文', // Chinese
    code: 'zh',
  },
  {
    id: 4,
    name: 'Deutsch', // German
    code: 'de',
  },
  // {
  //   id: 5,
  //   name: 'Italiano', // Italian
  //   code: 'it',
  // },
  {
    id: 6,
    name: 'Korean - 한국어', // Korean
    code: 'ko',
  },
  {
    id: 7,
    name: 'Türkçe', // Turkish
    code: 'tr',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  // use translation context to change language
  const { language, setLanguage } = useTranslation()

  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
      setTranslated(HeaderContent[language])
    }, [language])

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };
    
  React.useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <header className='bg-white text-black shadow-md flex items-center justify-between py-4 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-20 w-full min-h-[50px]'>
        <Link href={"/"}>
          <Image src={Logo1} alt="Avestock" className='w-12 h-8 md:h-12' />
          {/* <span className='h-8 md:h-12'>Avestock</span> */}
        </Link>
        <nav className="items-center hidden md:flex gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col items-center text-sm font-medium md:flex-row text-dark-light gap-7 md:gap-4 lg:gap-7'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium ${pathname==="/" && "text-primary border-b-2 border-primary"}`}>{t?.home || 'Home'}</Link></li>
            <li><Link href="/about" className={`pb-1.5 px-1 font-medium ${pathname==="/about" && "text-primary border-b-2 border-primary"}`}>{t?.about || "About"}</Link></li>
            <li><Link href="/contact" className={`pb-1.5 px-1 font-medium ${pathname==="/contact" && "text-primary border-b-2 border-primary"}`}>{t?.contact || "Contact"}</Link></li>
            <li><Link href="/login" className={`pb-1.5 px-1 font-medium ${pathname==="/login" && "text-primary border-b-2 border-primary"}`}>{t?.login || "Login"}</Link></li>
            <li><Link href="/register" className={`pb-1.5 px-1 font-medium ${pathname==="/register" && "text-primary border-b-2 border-primary"}`}>{t?.register || "Register"}</Link></li>
            {/* <select 
            value={language} 
            onChange={(e) => {
              const value: ILanguage = e.target.value as ILanguage
              if (languageCodes.includes(value)) {
                setLanguage(value)
              }
            }} 
            className='hidden text-sm font-medium bg-transparent bg-white border-none outline-none cursor-pointer md:block w-28 text-dark-light gap-7 md:gap-4 lg:gap-7 focus:outline-none focus:ring-0 focus:border-transparent focus:ring-transparent focus:ring-offset-transparent'
          >
            {
              languages.map((lang) => (
                <option className='bg-white' key={lang.id} value={lang.code}>{lang.name}</option>
              ))
            }
          </select> */}
          </ul>
        </nav>
        <div className='flex items-center gap-2'>
          {/* <select 
            value={language} 
            onChange={(e) => {
              const value: ILanguage = e.target.value as ILanguage
              if (languageCodes.includes(value)) {
                setLanguage(value)
              }
            }} 
            className='text-sm font-medium bg-transparent bg-white border-none outline-none cursor-pointer w-28 text-dark-light gap-7 md:gap-4 lg:gap-7 focus:outline-none focus:ring-0 focus:border-transparent focus:ring-transparent focus:ring-offset-transparent'
          >
            {
              languages.map((lang) => (
                <option className='bg-white' key={lang.id} value={lang.code}>{lang.name}</option>
              ))
            }
          </select> */}
          <div id="google_translate_element"></div>
          {/*  */}
          <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl font-bold cursor-pointer md:hidden text-primary' />
        </div>
        
      </header>
      <div onClick={() => setIsOpen(false)} className={`md:hidden shadow fixed top-0 left-0 w-full min-h-screen h-screen bg-black/10 px-4 py-2 md:px-10 z-30  ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
        <div className={`md:hidden shadow fixed top-0 left-0 w-5/6 min-h-screen h-screen grad-to-right text-white px-4 py-2 md:px-10 z-30  ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
          <nav className="flex flex-col gap-16 p-4 px-8 pt-40 mb-8 text-lg md:hidden">
            <ul className='flex flex-col text-sm font-medium text-dark-light gap-7 md:gap-4 lg:gap-7'>
              <li><Link href="/" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/" && "text-primary border-b-2 border-primary"}`}>{t?.home || 'Home'}</Link></li>
              <li><Link href="/about" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/about" && "text-primary border-b-2 border-primary"}`}>{t?.about || 'About'}</Link></li>
              <li><Link href="/contact" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/contact" && "text-primary border-b-2 border-primary"}`}>{t?.contact || 'Contact'}</Link></li>
              <li><Link href="/login" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/login" && "text-primary border-b-2 border-primary"}`}>{t?.login || 'Login'}</Link></li>
              <li><Link href="/register" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/register" && "text-primary border-b-2 border-primary"}`}>{t?.register || "Register"}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header