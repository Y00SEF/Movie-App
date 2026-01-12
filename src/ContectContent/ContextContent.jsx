import { createContext, useState } from "react";

export const ContextData = createContext();

export function ContextDataProvider({ children }) {
  // اقرأ الـ token مرة واحدة عند أول render
  const [UserToken, setUserToken] = useState(() =>
    localStorage.getItem("UserToken")
  );

  return (
    <ContextData.Provider value={{ UserToken, setUserToken }}>
      {children}
    </ContextData.Provider>
  );
}
