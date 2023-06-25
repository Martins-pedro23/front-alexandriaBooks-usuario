export interface IDecodedToken {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export type LoginStore = {
  token: string | null;
  setToken: (token: string) => void;
  getTokenInCookies: () => string | undefined;
};
