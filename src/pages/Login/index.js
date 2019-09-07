import React from 'react';

import api from '../../services/api'
import { Title, LoginPage } from './styles';

import Logo from '../../logo.svg';;

export default function Login() {
  return (
    <>
      <LoginPage>
        <div className="banner gradient-background">
          <img src={Logo} alt="Scool - Estudos Compartilhados" className="image" />
        </div>

        <div className="form">
          <Title>Login</Title>

          <form action="">
            <input className="input" type="text" placeholder="Usuário" />
          </form>
        </div>
      </LoginPage>
    </>

  );
}
