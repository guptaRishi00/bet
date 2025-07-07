import { Navigate } from 'react-router-dom';

import { PATH } from '@/constants/routes';
import { getCookies } from '@/lib/cookies';

function PrivateRoutes({ children }: { children: JSX.Element }) {
  const {
    auth: { accessToken },
  } = getCookies();

  if (!accessToken) {
    return <Navigate to={PATH.SIGN_IN} replace />;
  }

  return children;
}

export default PrivateRoutes;
