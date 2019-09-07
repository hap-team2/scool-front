import React, { Component } from 'react';
import styled from 'styled-components';

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <SidebarStyle>
          <div className="sidebar__photo gradient-background"></div>

          <div className="sidebar__content">
            <h1 className="sidebar__username main-title">Username</h1>

            <ul className="sidebar__list">
              <li className="sidebar__list-item">
                <span>Ano:</span> 1
              </li>

              <li className="sidebar__list-item">
                <span>Curso:</span> Ensino Médio
              </li>

              <li className="sidebar__list-item">
                <span>Pontuação:</span> 290 <span className="lnr lnr-star"></span>
              </li>
            </ul>

            <nav className="sidebar__nav">
              <a href="" className="sidebar__nav-link"><span className="lnr lnr-home"></span> Home</a>
              <a href="" className="sidebar__nav-link"><span className="lnr lnr-user"></span> Perfil</a>
              <a href="" className="sidebar__nav-link"><span className="lnr lnr-question-circle"></span> Aprendizado</a>
              <a href="" className="sidebar__nav-link"><span className="lnr lnr-bubble"></span> Ouvidoria</a>
            </nav>

            <a href="Sair" className="sidebar__logout"><span className="lnr lnr-enter"></span> Sair</a>

          </div>
        </SidebarStyle>
      </>
    )
  }
}

const SidebarStyle = styled.aside`
  position: fixed;
  width: 300px;
  height: 100%;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .sidebar__photo {
    height: 200px;
  }
  
  .sidebar__content {
    padding: 30px;
  }

  .sidebar__username {
    margin: 0 auto 5px;
    font-size: 22px;
  }

  .sidebar__list {
    list-style: none;
    color: #757575;
    font-size: 18px;
    border-bottom: 1px solid #00818A;
    padding: 0 0 20px;

      span {
        color: #293462;
        margin: 0 5px 0 0;
        font-weight: bold;
      }

      .lnr {
        color: #ffd400;
      }
  }

  .sidebar__nav {
    margin: 30px auto;
    
    &-link {
      display: block;
      margin: 0 auto 15px;
      font-size: 24px;
      font-weight: 300;
      color: #757575;

        span {
          color: #FF8B03;
        }

        &:hover {
          color: #293462;
        }
    }
  }

  .sidebar__logout {
    display: block;
    text-align: right;
    color: #757575;
    font-size: 22px;
  }
`;

