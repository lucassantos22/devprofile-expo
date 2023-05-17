import React, { createContext } from 'react';
import { api } from '../services/api';

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credentials: ICredentials): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  async function signIn({ email, password }: ICredentials) {
    try {
      await api.post('sessions', {
        email,
        password,
      });
    } catch (error) {
      throw new Error(error as string);
    }
  }
  return (
    <AuthContext.Provider value={{ name: 'Lucas', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
