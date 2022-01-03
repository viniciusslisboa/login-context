import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { Login } from './component/Login/index';
import { Profile } from './component/Profile/index';
import { ProtectedLayout } from './component/ProtectedLayout/index';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
          } />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
