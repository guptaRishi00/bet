import { ReactNode } from 'react';
import { LayoutProvider } from './LayoutContext';

import { SecondTopbarHeaderBreadcrumb } from '@/customComponents/SecondTopbarHeaderBreadcrumb';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutProvider>
      <div className="min-h-screen w-full bg-background font-sans">
        <SecondTopbarHeaderBreadcrumb />
        {children}
      </div>
    </LayoutProvider>
  );
}

export { Layout };
export default Layout;
