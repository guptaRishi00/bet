import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Toaster } from '@/components/base/sonner';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // default: true
          },
        },
      }),
  );

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster
        toastOptions={{
          classNames: {
            toast: 'bg-[#1C1D21] text-white rounded-md p-4 border-[#15b54b] shadow-lg',
          },
        }}
      />
    </Layout>
  );
}

export default App;
