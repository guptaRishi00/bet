import { Outlet } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { useRedirectOnAuth } from '@/hooks/use-redirect-on-auth';

function WidthHeightFullBgBackgroundLayout() {
  useRedirectOnAuth();
  return (
    <div className="w-full h-full flex">
      <div className="w-full h-full flex">
        <AnimatePresence mode="wait">
          <Outlet /> {/* No motion.div here, it goes inside each page */}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WidthHeightFullBgBackgroundLayout;
