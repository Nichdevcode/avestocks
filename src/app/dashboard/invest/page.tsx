'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import { IInvest, IPlan, ITableColumn } from '@/interfaces'
import { apiInvest, apiGetPlans, apiGetUserInvestments } from '@/services/UserService'
import React from 'react'
import { useSession } from 'next-auth/react'
import usePost from '@/hooks/useMutation'
import { formatDate } from '@/utils/dateFunc'
import { IPageContent } from '@/dictionaries/dashboard/invest'
import { DashboardInvestContent } from '@/dictionaries/dashboard/invest'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
import RealTimeProfitDisplay from '@/components/RealTimeProfitDisplay'
import { MdClose } from 'react-icons/md'
import { apiGetUser } from '@/services/AuthService'

const Invest = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardInvestContent[language])
  }, [language])

  // const session = useSession()
  // const user = session.data?.user

  const context = useAuthContext()
  const user = context?.user

  const [modalOpen, setModalOpen] = React.useState(false)
  const [amount, setAmount] = React.useState('')
  const [investment, setInvestment] = React.useState<IPlan | null>(null)

  const { data: plans, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IPlan[]>({api: apiGetPlans, key: ['plans'] })
  
  const { data: userDetails, refetch: refetchUser } = useFetch({ 
    api: apiGetUser, 
    key: ['userDetails'],
    param: {
      id: user?._id
    },
   })

  const { data: investments, error: investmentError, isLoading: investMentLoading, refetch } = useFetch<IInvest[]>({api: apiGetUserInvestments, param: user?._id, key: ['investments'] })


  const investMutation = usePost<IInvest, any>(apiInvest, {
    onSuccess: (data) => {
      console.log(data)
      setAmount('')
      refetch()
      toast.success('Investment Successful')
      setModalOpen(false)
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'Something went wrong')
      console.log(error)
    }   
  })

  // console.log( { investments  })
  // const { data } = useSession()
  const columns: ITableColumn[] = [
    {
      name: 'amount',
      label: `Amount(${user?.symbol || "$"})`,
    },
    {
      name: 'plan',
      label: "Plan",
      extra: true,
      custom: (val: string, meta: any) => {
        const plan = plans?.find((plan) => plan._id === val)
        return  (
            <p>{plan?.name || val} Plan</p>
        )
      }
    },
    {
      name: 'status',
      label: 'Status',
      extra: true,
      custom: (val: string, meta: any) => {
        return (
          <p className={`px-2 py-1 text-xs rounded-md font-bold ${val === 'completed'
                ? 'text-yellow-500'
                : val === 'active'
                ? 'text-green-500'
                : 'text-red-500'}`}>{val === "paused" ? "..." : val }</p>
        )
      },
    },
    {
      name: 'profit',
      label: `Returns(${user?.symbol || "$"})`,
      extra: true,
      custom: (val: string, meta: IInvest) => {
        // interface IRealTimeProfitDisplayProps {
        //   startDate: Date;
        //   initialProfit: number;
        //   percentageProfit: number;
        //   numberOfDays: number;
      
        // }
        const plan = plans?.find(plan => plan._id == meta?.plan)
        // console.log("plan exist", plan)
        const date = new Date(meta?.createdAt!)
        const startTime = date.getTime()
        const initialProfit = meta.amount
        // console.log(val, meta)
        return  (
          <div className="">
           { 
           meta.status === "paused" ? 
            <p>FRONZEN</p>
            :
            meta?.status === "completed" ?
            <p>
              {user?.symbol || "$"}{(meta.amount * plan?.roi!/100) + meta.amount}
            </p>
            :
           <RealTimeProfitDisplay 
              initialProfit={initialProfit} 
              startTime={startTime} 
              percentageProfit={Number(plan?.roi)!} 
              numberOfDays={plan?.duration!} 
              symbol={user?.symbol! || "$"}
              pause={meta?.pause}
            />
            }
            </div>
        )
      },
    },
    {
      name: 'createdAt',
      label: 'Created At',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{formatDate(val)}</p>
        )
      },
    },
  ]

  const handleInvest = (plan: IPlan) => {
    setInvestment(plan)
    setModalOpen(true)
  }

  const handleInvestSubmit = () => {
    if (!amount) {
      toast.error('Please enter amount')
      return
    }

    if (+amount < investment?.minimum!) {
      toast.error('Amount is less than minimum')
      return
    }

    if (+amount > investment?.maximum!) {
      toast.error('Amount is greater than maximum')
      return
    }

    if (+amount > (userDetails?.balance! + userDetails?.total_earnings!)) {
      toast.error('Insufficient balance')
      return
    }
    
    investMutation.mutate({
      userId: user?._id!,
      email: userDetails?.email!,
      amount: +amount,
      plan: investment?._id!,
    })
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        investMutation?.isLoading && <GentleLoader />
      }
      <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Live Investments"}</h2>
      <div className='mb-6'>
        <Table title={t?.investment || 'Investments'} data={investments || []} columns={columns} />
      </div>
      <h2 className='mb-6 text-lg font-semibold'>{t?.plans || "Plans"}</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
       {
          plans?.map((plan, index) => (
            <div key={index} className="flex flex-col text-center border rounded-md shadow-md border-primary">
              <div className="flex flex-col gap-1 p-2 py-4 text-center text-white border-b rounded-t-md bg-primary">
                <h4 className='text-lg'>{plan.name} {t?.plan || "PLAN"}</h4>
                <p className='text-sm'>{t?.range || "Investment Range"}: {user?.symbol || "$"}{plan.minimum} - {user?.symbol || "$"}{plan.maximum}</p>
              </div>
              <div className="p-3 px-12 border-b">{t?.duration || "Duration"}: {plan.duration} {t?.days || "Days"}</div>
              <div className="p-3 px-12 border-b">{t?.roi || "ROI"}: {plan.roi}%</div>
              <div className="p-3 px-12 border-b">{t?.principal || "Principal Return after completion"}</div>
              <div className="p-3 px-12 border-b">{t?.withdraw || "Withdraw Principal at any time 10% fee will be charged"}</div>
              <button className="w-3/4 p-2 mx-auto my-2 text-white rounded-md cursor-pointer bg-primary" onClick={() => handleInvest(plan)}>{t?.invest_now || "Invest Now"}</button>
            </div>
        ))}
      </div>
      <div className={`fixed top-0 h-full right-0 w-full py-4 shadow-md z-30 transition-all ${modalOpen ? "translate-x-0 bg-white/10 " : 'translate-x-full'}`}>
        <div className={`fixed top-0 h-full right-0 w-full max-w-sm bg-white py-4 shadow-md z-30 transition-all ${modalOpen ? "translate-x-0" : 'translate-x-full'}`}>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex items-center justify-between gap-4 px-4 py-2 border-b border-black">
            <h2 className='text-2xl font-semibold'>{investment?.name} {t?.plan || "Plan"}</h2>
            <MdClose className='text-xl cursor-pointer' onClick={() => setModalOpen(false)} />
          </div>
          <div className="flex flex-col max-w-xs gap-4 px-4 mt-2">
            <div className="flex items-center justify-between gap-6 p-3 font-semibold text-white rounded-md bg-primary">
              <span>{t?.wallet_balance || "Wallet Balance"}</span>
            <span>{user?.symbol || "$"}{userDetails?.balance}</span>
            </div>
            <div className="flex items-center justify-between gap-6 px-3 text-xs">
              <span>{t?.minimum || "Minimum Deposit"}</span>
              <span>{user?.symbol || "$"}{investment?.minimum}</span>
            </div>
            <div className="flex items-center justify-between gap-6 px-3 text-xs">
              <span>{t?.maximum || "Maximum Deposit"}</span>
              <span>{user?.symbol || "$"}{investment?.maximum}</span>
            </div>
            <div className="flex items-center justify-between gap-6 text-sm">
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" name="" id="" placeholder={t?.amount || 'Enter Amount'} min={investment?.minimum} max={investment?.maximum} className='w-full p-3 border border-black rounded-md' />
            </div>
          </div>
          <button onClick={handleInvestSubmit} className='p-2 px-4 mt-3 ml-4 text-white rounded-md w-fit bg-primary'>{t?.invest || "Invest"}</button>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Invest