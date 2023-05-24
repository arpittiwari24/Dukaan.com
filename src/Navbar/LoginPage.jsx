// import React from 'react';
// import logo from './logo.svg';


import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google.jsx';

function Login() {
  return (
    <div >
      <header >
        <img src="logo-no-background.svg"  alt="logo" />

        <GoogleOAuthProvider clientId="789257461270-qm9f6vogtuj5htoh69u1pd41h28lj7d9.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default Login;