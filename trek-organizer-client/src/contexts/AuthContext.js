import { createContext, useContext } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
  id: '',
  userName: '',
  email: '',
  token: ''
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    const data = {
      id: authData.user.id,
      userName: authData.user.userName,
      email: authData.user.email,
      token: authData.token
    }
    setUser(data);
  };

  const logout = () => {
    setUser(initialAuthState);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const authState = useContext(AuthContext);

  return authState;
}