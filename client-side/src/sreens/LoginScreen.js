import React from 'react';
import Login from '../components/Login';
import Screen from '../components/Screen';

function LoginScreen(props) {
  return (
    <Screen navbar={false}>
      <Login/>
    </Screen>
  );
}

export default LoginScreen;