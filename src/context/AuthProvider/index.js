import React, { createContext, useEffect, useState } from 'react';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage, removeUserLocalStorage } from './util';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = getUserLocalStorage();
    if(user) {
      setUser(user);
    }
    if(loading) {
      <h1>Loading</h1>
    }
  }, []);
  
  async function authenticate(email, password) {
    const response = await LoginRequest(email, password)

    const payload = { token: response.token, email };
    setLoading(false);
    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(undefined);
    removeUserLocalStorage();
  }

  
  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  );
}