import { getCookies } from '@/lib/cookies';
import { toast } from 'sonner';

export default function HomePage() {
  console.log('HomePage');
  const { auth } = getCookies();
  console.log('auth', auth);
  console.log('auth', auth.isAuthenticated);
  console.log('auth', auth.accessToken);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <button
        className="text-white border-2 border-white rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-700"
        onClick={() => {
          toast.success('Hello world!');
          toast.error('Hello world!');
          toast('Hello world!');
          toast('Hello world! 3333', {
            description: 'This is a description',
            action: {
              label: 'Undo',
              onClick: () => {
                console.log('Undo action clicked');
                toast('Undo action clicked');
              },
            },
            icon: '🔔',
          });
        }}
      >
        Toaster
      </button>
    </div>
  );
}
