import { message } from 'antd';
import { Api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function setUserLocalStorage(user) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u');
  
  if(!json) {
    return null;
  } else {
    const user = JSON.parse(json);
    
    return user ?? null;
  }
}

export async function removeUserLocalStorage() {
  localStorage.removeItem('u')
}

export async function LoginRequest(email, password) {
  try {
    const request = await Api.post('login', { email, password });
    return request.data;
  } catch (err) {
    return null;
  }
}