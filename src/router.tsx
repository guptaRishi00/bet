import { createBrowserRouter } from 'react-router-dom';
import WidthHeightFullBgBackgroundLayout from '@/components/layout/WidthHeightFullBgBackgroundLayout';
import PrivateRoutes from '@/components/layout/PrivateRoute';
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
        path: PATH.TIPSTERS_PAGE,
        lazy: async () => {
          const { default: Component } = await import('./pages/tipsters-page');
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
        path: PATH.PREDICT_PAGE,
        lazy: async () => {
          const { default: Component } = await import('./pages/predict-page');
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
        path: PATH.RESULTS_PAGE,
        lazy: async () => {
          const { default: ResultsPage } = await import('./pages/result-page');
          return { Component: ResultsPage };
        },
      },
      {
        path: PATH.PROFILE_PAGE,
        lazy: async () => {
          const { default: Profile } = await import('./pages/profile');
          return { Component: Profile };
        },
      },
      {
        path: PATH.WALLET_PAGE,
        lazy: async () => {
          const { default: Wallet } = await import('./pages/profile/wallet');
          return { Component: Wallet };
        },
      },
      {
        path: PATH.MY_TIPS,
        lazy: async () => {
          const { default: MyTips } = await import('./pages/profile/my-tips');
          return { Component: MyTips };
        },
      },
      {
        path: PATH.SAVED_TIPS,
        lazy: async () => {
          const { default: SavedTips } = await import('./pages/profile/saved-tips');
          return { Component: SavedTips };
        },
      },
      {
        path: PATH.PROFILE_SETTINGS,
        lazy: async () => {
          const { default: ProfileSettings } = await import('./pages/profile/settings');
          return { Component: ProfileSettings };
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
