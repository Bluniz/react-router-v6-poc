import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  signIn: null,
  signOut: null,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const signIn = (userName, callback) => {
    setUser(userName);
    callback();
  };

  const signOut = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
