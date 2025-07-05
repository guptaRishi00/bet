import { ReactNode } from 'react';
import { LayoutProvider } from './LayoutContext';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutProvider>
      <div className="h-screen w-screen overflow-clip bg-background font-sans">{children}</div>
    </LayoutProvider>
  );
}

export { Layout };
export default Layout;
