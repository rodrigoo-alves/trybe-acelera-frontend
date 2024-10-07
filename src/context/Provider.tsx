import { useState } from "react";
import Context from "./Context"

export type ProviderProps = {
  children: React.ReactNode
}

export type ProviderValues = {
  user: string;
  onLogin: (username: string) => void;
}

function Provider ({ children}: ProviderProps) {

  const [user, setUser] = useState('');

  const onLogin = (username: string) => {
    setUser(username);
  }

  const values: ProviderValues = {
    user,
    onLogin
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider
