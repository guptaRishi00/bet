import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center text-white px-4 text-center"
      style={{
        background: 'linear-gradient(180deg, #101212 0%, #3B3E40 99.99%)',
      }}
    >
      <h1 className="text-[96px] font-bold leading-[1] mb-4 text-[#61F308]">404</h1>
      <h2 className="text-[24px] font-poppins font-semibold mb-2">Page Not Found</h2>
      <p className="text-[14px] font-poppins max-w-[400px] text-[#ffffffcc] mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-[#61F308] text-black px-6 py-2 rounded-[8px] font-poppins text-[14px] font-medium hover:opacity-90 transition"
      >
        <ArrowLeft size={16} />
        Go Back
      </button>
    </div>
  );
}
