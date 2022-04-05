/* eslint-disable prettier/prettier */
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: token => {},
  logout: () => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  const [email, setEmail] = useState();


  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedToken) {
        setAuthToken(storedToken);
        setEmail(storedEmail);
      }
    }

    fetchToken();
  }, []);

  function authenticate(email, token) {
    setAuthToken(token);
    setEmail(email)
    AsyncStorage.setItem('email', email);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    setEmail(null);
  }

  const value = {
    token: authToken,
    email: email,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
