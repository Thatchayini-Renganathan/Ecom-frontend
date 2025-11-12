import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/auth/validate`, { withCredentials: true })
      .then((res) => {
        const { name, userId, role, loggedIn } = res.data;
        if (loggedIn) {
          setIsAuthenticated(true);
          setUser({ name, userId, role });
        }
      })
      .catch(() => setIsAuthenticated(false));
  }, [API_URL]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
