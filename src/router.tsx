import { createBrowserRouter } from 'react-router-dom';
import WidthHeightFullBgBackgroundLayout from '@/customComponents/layout/WidthHeightFullBgBackgroundLayout';
import PrivateRoutes from './customComponents/layout/PrivateRoute';
import { PATH } from './constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WidthHeightFullBgBackgroundLayout />,
    children: [
      {
        path: PATH.HOME_PAGE,
        lazy: async () => {
          const { default: Component } = await import('./pages/home-page');
          return {
            Component: () => (
              <PrivateRoutes>
                <Component />
              </PrivateRoutes>
            ),
          };
        },
      },
      {
        path: PATH.TIPS_PAGE,
        lazy: async () => {
          const { default: Component } = await import('./pages/tips-page');
          return {
            Component: () => (
              <PrivateRoutes>
                <Component />
              </PrivateRoutes>
            ),
          };
        },
      },
      {
        path: PATH.AI_TIPS_PAGE,
        lazy: async () => {
          const { default: Component } = await import('./pages/ai-tips-page');
          return {
            Component: () => (
              <PrivateRoutes>
                <Component />
              </PrivateRoutes>
            ),
          };
        },
      },
      {
        path: PATH.SIGN_IN,
        lazy: async () => {
          const { default: SignIn } = await import('./pages/sign-in');
          return { Component: SignIn };
        },
      },
      {
        path: PATH.SIGN_UP,
        lazy: async () => {
          const { default: SignUp } = await import('./pages/sign-up');
          return { Component: SignUp };
        },
      },
      {
        path: PATH.FORGOT_PASSWORD,
        lazy: async () => {
          const { default: ForgotPassword } = await import('./pages/forgot-password');
          return { Component: ForgotPassword };
        },
      },
      {
        path: '*',
        lazy: async () => {
          const { default: NotFound } = await import('./pages/notFound');
          return { Component: NotFound };
        },
      },
    ],
  },
]);

export default router;
