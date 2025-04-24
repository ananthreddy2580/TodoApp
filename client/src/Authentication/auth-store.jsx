import { create } from "zustand";
import Cookies from "js-cookie"; // Install it with: npm install js-cookie

export const useAuthStore = create((set) => ({
  isLoggedIn: Cookies.get("isLoggedIn") === "true" ? true : false, // Read from cookie when store loads

  setIsLoggedIn: (value) => {
    Cookies.set("isLoggedIn", value.toString(), { expires: 7 }); // expires in 7 days
    set({ isLoggedIn: value });
  },
}));
