import { Outlet } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { useRedirectOnAuth } from '@/hooks/use-redirect-on-auth';

function WidthHeightFullBgBackgroundLayout() {
  useRedirectOnAuth();
  return (
    <div className="w-full h-full flex">
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default WidthHeightFullBgBackgroundLayout;
