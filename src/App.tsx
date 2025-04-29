import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { Layout } from '@/customComponents';
import { Toaster } from './components/ui/toaster';

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
      <Toaster />
    </Layout>
  );
}

export default App;
