import { isProduction } from '@/config/env';

//
export const COOKIE = {
  ACCESS_TOKEN: 'BBettingator_v1_access_token',
  EMAIL: 'BBettingator_v1_email',
  USER_ID: 'BBettingator_v1_userId',
};
export type COOKIE_KEYS = keyof typeof COOKIE;
export type COOKIE_VALUES = (typeof COOKIE)[COOKIE_KEYS];
//
export const BASE_URL = isProduction
  ? 'https://backend.bbettingator.com'
  : 'http://localhost:3015/api/v1';

export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * ONE_SECOND;

export const GOOGLE_CLIENT_ID = '1111-eeee.apps.googleusercontent.com'; // get actual from bettingator
