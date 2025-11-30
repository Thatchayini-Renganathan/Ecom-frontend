import { createContext, useState, useEffect } from "react";
import api from "@/api/axiosConfig";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/auth/validate")
      .then((res) => {
        const { name, userId, role, loggedIn } = res.data;
        if (loggedIn) {
          setIsAuthenticated(true);
          setUser({ name, userId, role });
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
