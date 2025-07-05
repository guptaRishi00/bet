import { PATH } from '@/constants/routes';
import { getCookies } from '@/lib/cookies';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import axios instance if it's not already imported

const useRedirectOnAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      //
      //
      console.log('useRedirectOnAuth');
      const {
        auth: { isAuthenticated },
      } = getCookies();
      if (!isAuthenticated) {
        console.log('not authenticated');
        navigate(PATH.SIGN_IN);
        return;
      }

      console.log('authenticated');
      window.history.pushState(null, '', PATH.HOME_PAGE);
      console.log('redirecting to home page');
      navigate(`${PATH.HOME_PAGE}`);
    };

    //

    handleRedirect();
  }, []);
};

export { useRedirectOnAuth };
