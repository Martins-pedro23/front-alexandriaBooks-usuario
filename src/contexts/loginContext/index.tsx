import Cookies from "js-cookie";
import { create } from "zustand";
import JWTDecode from "jwt-decode";
import { IDecodedToken, LoginStore } from "./types";

const useLoginStore = create<LoginStore>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  getTokenInCookies: () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const decodedToken: IDecodedToken = JWTDecode(token);
        const dateNow = new Date();
        if (decodedToken.exp * 1000 < dateNow.getTime()) {
          Cookies.remove("token");
          return undefined;
        }
      } else {
        Cookies.remove("token");
        return undefined;
      }
      return token;
    } catch (err) {
      Cookies.remove("token");
      return undefined;
    }
  },
}));

export default useLoginStore;
