import { create } from "zustand";

const useAuthStore = create((set) => {
  let user = null;
  const userInfo = localStorage.getItem("user-info");

  try {
    user = userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Error parsing user info from localStorage:", error);
    user = null;
  }

  return {
    user,
    login: (user) => {
      localStorage.setItem("user-info", JSON.stringify(user));
      set({ user });
    },
    logout: () => {
      localStorage.removeItem("user-info");
      set({ user: null });
    },
    setUser: (user) => {
      localStorage.setItem("user-info", JSON.stringify(user));
      set({ user });
    },
  };
});

export default useAuthStore;
