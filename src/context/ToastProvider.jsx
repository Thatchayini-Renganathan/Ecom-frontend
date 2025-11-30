import React, { createContext,useContext } from 'react'
import { toast } from "react-toastify";

const ToastContext = createContext();

export function ToastProvider({children}) {
    const notify = {
    success: (msg) => toast.success(msg),
    error: (msg) => toast.error(msg),
    info: (msg) => toast.info(msg),
    warn: (msg) => toast.warning(msg),
    default: (msg) => toast(msg),
  };

  return (
      <ToastContext.Provider value={notify}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);