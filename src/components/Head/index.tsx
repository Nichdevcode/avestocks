'use client'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useTranslation } from '@/hooks/useTranslationContext'
import { ILanguage, languageCodes } from '@/interfaces'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RxCaretDown } from 'react-icons/rx'
import { IPageContent } from '@/dictionaries/dashboard/header'
import { HeaderContent } from '@/dictionaries/dashboard/header'

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

const Head = () => {
  // const session = useSession()
  // const user = session.data?.user

  const { dispatch, user } = useAuthContext()
  const { language, setLanguage } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)
  
  React.useEffect(() => {
      setTranslated(HeaderContent[language])
    }, [language])

  const router = useRouter()

  const handleLogout = () => {
    dispatch({type: "LOGOUT", payload: null})
    router.push('/login')
}

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
    <div className='fixed top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 p-4 text-black bg-white shadow sm:sicky overflow-visibl sm:py-4 md:px-6 sm:ml-60'>
    {/* <div className='fixed top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 p-4 text-black bg-white shadow sm:sicky overflow-visibl sm:py-4 md:px-6'> */}
        {/* <input type="text" placeholder='Search' className='border border-gray-300 rounded-full px-4 min-w-[100px] md:w-96' /> */}
        <h1 className='font-semibold text-primary'>{t?.dashboard || "Dashboard"}</h1>
        <div className='flex items-center justify-between gap-2'>
          {/* <div className="w-4 h-4 bg-gray-200 rounded-full" /> */}
          <div className='flex items-center gap-2 text-xs'>
            <div id="google_translate_element"></div>

            {/* <select 
              value={language} 
              onChange={(e) => {
                const value: ILanguage = e.target.value as ILanguage
                if (languageCodes.includes(value)) {
                  setLanguage(value)
                }
              }} 
              className='w-24 text-sm font-medium bg-transparent border-none outline-none cursor-pointer md:block text-dark-light gap-7 md:gap-4 lg:gap-7 focus:outline-none focus:ring-0 focus:border-transparent focus:ring-transparent focus:ring-offset-transparent'
            >
              {
                languages.map((lang) => (
                  <option key={lang.id} value={lang.code}>{lang.name}</option>
                ))
              }
            </select> */}
            <div className="w-6 h-6 rounded-full bg-primary/30" />
            <div className="flex-col hidden gap-1 md:flex">
              <div className='text-sm font-semibold'>{user?.last_name} {user?.first_name}</div>
              <div className='text-xs'>{user?.email}</div>
            </div>
            <div className='relative cursor-pointer group'>
              <RxCaretDown className='text-2xl text-gray-dark md:' />
              <div className='absolute right-0 flex-col hidden gap-2 pt-2 bg-white shadow-md top-6 group-hover:flex'>
                {/* <Link href={`/dashboard/settings`} className='py-2 border-b-2 cursor-pointer'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    {t?.settings || "Settings"}
                  </span>
                </Link> */}
                <div onClick={handleLogout} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    {t?.logout || "Logout"}
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

export default Head