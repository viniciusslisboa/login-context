import { Button } from 'antd';
import React from 'react';
import { useAuth } from './../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { logout } = useAuth();
  const redirect = useNavigate();

  async function handleLogout() {
    await logout();
    redirect('/')
  }

  return (
    <>
      <h1>Componente profile</h1>
      <Button type='ghost' htmlType='submit' onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
}