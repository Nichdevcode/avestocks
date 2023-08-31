'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import useMutation from '@/hooks/useMutation'
import { IPlan } from '@/interfaces'
import { apiGetPlans, apiUpdatePlan } from '@/services/AdminService'
import useFetch from '@/hooks/useFetch'
import GentleLoader from '@/components/GentleLoader'
import { toast } from 'react-toastify'
// import { useSession } from 'next-auth/react'


const Plans = () => {
  // const { data } = useSession()
  const { data: plans, error, isLoading, isFetching, refetch, fetchStatus } = useFetch<IPlan[]>({api: apiGetPlans, key: ['AdminPlans'] })
  const [data, setData] = React.useState<IPlan[]>([])

  useEffect(() => {
    if (plans) {
      setData(plans)
    }
  }, [plans])

  const updatePlanMutation = useMutation<IPlan, any>(apiUpdatePlan, {
    onSuccess: (data) => {
      refetch()
      toast.success('Plan Updated Successfully')
      console.log({updatedata: data})
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'An error occured')
      console.log(error)
    }   
  })

  // console.log( { plans  })

  const handleUpdate = (plan: IPlan) => {
    updatePlanMutation.mutate(plan)
  }

  const handlePlanName = (e: React.ChangeEvent<HTMLInputElement>, plan: IPlan) => {
    setData(prev => prev.map((p) => {
      if (p._id === plan._id) {
        return {
          ...p,
          name: e.target.value
        }
      }
      return p
    }))
  }

  const handlePlanMinimum = (e: React.ChangeEvent<HTMLInputElement>, plan: IPlan) => {
    setData(prev => prev.map((p) => {
      if (p._id === plan._id) {
        return {
          ...p,
          minimum: +e.target.value
        }
      }
      return p
    }))
  }

  const handlePlanMaximum = (e: React.ChangeEvent<HTMLInputElement>, plan: IPlan) => {
    setData(prev => prev.map((p) => {
      if (p._id === plan._id) {
        return {
          ...p,
          maximum: +e.target.value
        }
      }
      return p
    }))
  }

  const handlePlanDuration = (e: React.ChangeEvent<HTMLInputElement>, plan: IPlan) => {
    setData(prev => prev.map((p) => {
      if (p._id === plan._id) {
        return {
          ...p,
          duration: +e.target.value
        }
      }
      return p
    }))
  }

  const handlePlanROI = (e: React.ChangeEvent<HTMLInputElement>, plan: IPlan) => {
    setData(prev => prev.map((p) => {
      if (p._id === plan._id) {
        return {
          ...p,
          roi: +e.target.value
        }
      }
      return p
    }))
  }

  

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        updatePlanMutation.isLoading && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Plans Admin</h2>
        <div className="flex flex-col gap-4">
          {
            data.map((plan, index) => (
              <div key={index} className="flex flex-col gap-2 p-4">
                <h2 className='py-2 text-2xl border-b border-black'>{plan.name} Plan</h2>
                <div className="flex flex-col max-w-xs gap-4 pt">
                  <div className="flex flex-col gap-1">
                    <span>Minimum Deposit </span>
                    <input type="number" value={plan.minimum} onChange={(e) => handlePlanMinimum(e, plan)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Maximum Deposit</span>
                    <input type="number" value={plan.maximum} onChange={(e) => handlePlanMaximum(e, plan)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Duration (days)</span>
                    <input type="number" value={plan.duration} onChange={(e) => handlePlanDuration(e, plan)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>ROI(1-100)</span>
                    <input type="number" value={plan.roi} onChange={(e) => handlePlanROI(e, plan)} name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                  </div>
                </div>
                <button onClick={() => handleUpdate(plan)} className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
              </div>
            ))}
        </div>
    </main>
  )
}

export default Plans
          // <div className="flex flex-col gap-2 p-4">
          //   <h2 className='py-2 text-2xl border-b border-black'>Professional Plan</h2>
          //   <div className="flex flex-col max-w-xs gap-4 pt">
          //     <div className="flex flex-col gap-1">
          //       <span>Minimum Deposit</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //     <div className="flex flex-col gap-1">
          //       <span>Maximum Deposit</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //     <div className="flex flex-col gap-1">
          //       <span>Daily Income</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //   </div>
          //   <button className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
          // </div>
          // <div className="flex flex-col gap-2 p-4">
          //   <h2 className='py-2 text-2xl border-b border-black'>Elite Plan</h2>
          //   <div className="flex flex-col max-w-xs gap-4 pt">
          //     <div className="flex flex-col gap-1">
          //       <span>Minimum Deposit</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //     <div className="flex flex-col gap-1">
          //       <span>Maximum Deposit</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //     <div className="flex flex-col gap-1">
          //       <span>Daily Income</span>
          //       <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //     </div>
          //   </div>
          //   <button className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
          // </div>