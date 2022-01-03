import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserLocalStorage } from '../../context/AuthProvider/util';

export const ProtectedLayout = ({children}) => {
  const auth = getUserLocalStorage();
  const redirect = useNavigate();
  useEffect(() => {
    if(!auth?.email) {
      redirect('/')
      
    }  
  }, [])
  
  return children;
}