import { create } from "zustand";
import Cookies from "js-cookie"; // Install it with: npm install js-cookie

export const useAuthStore = create((set) => ({
  isLoggedIn: Cookies.get("isLoggedIn") === "true" ? true : false,

  setIsLoggedIn: (value) => {
    Cookies.set("isLoggedIn", value.toString(), { expires: 7 }); // expires in 7 days
    set({ isLoggedIn: value });
  },
}));

export const useUserIdStore = create((set) => ({
  userId: "",
  setUserId: (value) => {
    set({ userId: value });
  },
}));
