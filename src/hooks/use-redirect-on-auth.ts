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
      const {
        auth: { isAuthenticated },
      } = getCookies();
      if (!isAuthenticated) {
        navigate(PATH.FORGOT_PASSWORD);
        return;
      }

      window.history.pushState(null, '', PATH.HOME_PAGE);
      navigate(`${PATH.HOME_PAGE}`);
    };

    //

    handleRedirect();
  }, []);
};

export { useRedirectOnAuth };
