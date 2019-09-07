import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="form__content">
            <h1 className="form__content-title main-title">Login</h1>

            <form action="">
              <input className="form__content-input input" type="text" placeholder="Usuário" />
              <input className="form__content-input input" type="password" placeholder="Senha" />
              <Link to={`/home/`} className="form__content-btn button">Entrar</Link>
            </form>
          </div>
        </div>
      </LoginPage>
    </>

  );
}
