import { COOKIE, COOKIE_VALUES } from '@/constants/common';
import Cookies from 'js-cookie';

export function getCookies() {
  const accessToken = Cookies.get(COOKIE.ACCESS_TOKEN);
  const email = Cookies.get(COOKIE.EMAIL);
  const userId = Cookies.get(COOKIE.USER_ID);

  const isAuthenticated = accessToken && email && userId;

  return {
    auth: { accessToken, email, userId, isAuthenticated },
  };
}

//
export function setCookies(
  cookies: { key: COOKIE_VALUES; value: string; expires?: number; isSession?: boolean }[],
): void;
export function setCookies(
  cookies: Partial<Record<COOKIE_VALUES, { value: string; expires?: number; isSession?: boolean }>>,
): void;
export function setCookies(
  cookies:
    | { key: COOKIE_VALUES; value: string; expires?: number; isSession?: boolean }[]
    | Partial<Record<COOKIE_VALUES, { value: string; expires?: number; isSession?: boolean }>>,
): void {
  // Default expiration time in days
  const defaultExpiration = 60;

  if (Array.isArray(cookies)) {
    cookies.forEach(({ key, value, expires, isSession }) => {
      if (isSession) {
        Cookies.set(key, value); // No expiration for session cookies
      } else {
        const expiresInDays = expires !== undefined ? expires : defaultExpiration;
        Cookies.set(key, value, { expires: expiresInDays });
      }
    });
  } else {
    Object.entries(cookies).forEach(([key, cookie]) => {
      if (cookie) {
        const { value, expires, isSession } = cookie;
        if (isSession) {
          Cookies.set(key as COOKIE_VALUES, value); // No expiration for session cookies
        } else {
          const expiresInDays = expires !== undefined ? expires : defaultExpiration;
          Cookies.set(key as COOKIE_VALUES, value, { expires: expiresInDays });
        }
      }
    });
  }
}

//

export function removeAllCookies() {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
}

export function removeCookies(cookies: COOKIE_VALUES[]): void;
export function removeCookies(cookies: COOKIE_VALUES[]): void {
  cookies.forEach((cookie) => {
    Cookies.remove(cookie);
  });
}
