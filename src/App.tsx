import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          classNames: {
            toast: 'bg-[#1C1D21] text-white rounded-md p-4 border-[#15b54b] shadow-lg',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
