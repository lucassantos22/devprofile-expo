import React, { createContext } from 'react';

interface IAuthContext {
  name: string;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => (
  <AuthContext.Provider value={{ name: 'Lucas' }}>
    {children}
  </AuthContext.Provider>
);
