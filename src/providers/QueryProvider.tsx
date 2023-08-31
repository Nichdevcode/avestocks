'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

interface Props {
    children: React.ReactNode
}



export default function Providers({ children }: Props) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
        queries: {
          retry: 1,
          // refetchOnMount: true,
        },
      },
  }))

  React.useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastContainer />
    </QueryClientProvider>
  )
}