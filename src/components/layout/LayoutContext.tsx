import { createContext, useContext, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LayoutContextProps {}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>;
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};
