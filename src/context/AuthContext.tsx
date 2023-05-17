import React, { createContext } from 'react';

interface IAuthContext {
  name: string;
  signIn(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  function signIn() {
    console.log('sign in!');
  }
  return (
    <AuthContext.Provider value={{ name: 'Lucas', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
