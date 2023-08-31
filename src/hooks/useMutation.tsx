import { MutationFunction, useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { AxiosResponse } from "axios";
import { useSession } from 'next-auth/react'
import { useAuthContext } from '@/hooks/useAuthContext'


interface State {
  onSuccess?: (data: any, variables?: any, context?: any) => void;
  onError?: (error: any, variables?: any, context?: any) => void;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
  requireAuth?: boolean;
  id?: string;
}

const useMutations = <T,K>(api: (data: T, { id, token, ...rest } : { id: string, token: string, rest?: any }) => Promise<AxiosResponse>, { onSuccess, onError, showSuccessMessage=false, showErrorMessage=false, requireAuth, id, ...rest }: State) => {
    // const { data: session } = useSession()
    const context = useAuthContext()
    const token = context?.token || ""
    

    const Mutation = useMutation<K, K, T>({
        mutationFn: async (data: T) => {
          
          // const response = requireAuth ? await api(data, session?.user?.token.access) : await api(data)
          const response = requireAuth ? await api(data, { id: id!, token }) : await api(data, { id: id!, token })
          // console.log("response from usePost", response)
          return response?.data
          // if (response?.data?.status === "success") {
          //   return response?.data?.data
          // } else {
          //   throw new Error(response?.data?.message)
          //   }
        },
        onSuccess: (data, variables, context) => {
            // console.log("successful", data)
            if (showSuccessMessage) {
              // toast.success(data?.message);
              toast.success("Successful !");
            }
            if (onSuccess) {
              // console.log("onSuccess", onSuccess)
                onSuccess(data, variables, context)
            }
        },
        onError: (error: any, variables, context) => {
            console.log("error", error)
            if (showErrorMessage) {
              toast.error(error?.response?.data?.message || "An Error Occurred!");
            } else {
              // toast.error("An Error Occurred!");
            }
            if (onError) {
                onError(error, variables, context)
            }
        },
        ...rest
      })

    return Mutation
}

export default useMutations