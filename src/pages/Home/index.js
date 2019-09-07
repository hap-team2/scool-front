import React from 'react';
import { Link } from 'react-router-dom'

import Sidebar from '../../components/Sidebar';
import { HomeContent } from './styles';

// import { Container } from './styles';

export default function Home() {
  return (
    <>
      <Sidebar />
      <HomeContent className="home__content">

        <div className="text-right">
          {/* <a href="/create-post" className="button">Criar Tópico</a> */}
          <Link to={`/create-post/`} className="button">Criar Tópico</Link>
        </div>

        <div className="home__subjects">
          <h2 className="home__subjects-title main-title">Matérias</h2>

          <ul className="home__subjects-list">
            <li className="home__subjects-item card">Matemática</li>
            <li className="home__subjects-item card">Matemática</li>
            <li className="home__subjects-item card">Matemática</li>
            <li className="home__subjects-item card">Matemática</li>
            <li className="home__subjects-item card">Matemática</li>
          </ul>
        </div>

        <div className="home__topics">
          <h2 className="home__topics-title main-title">Assuntos</h2>

          <ul className="home__topics-list">
            <li className="home__topics-item card">Assunto</li>
            <li className="home__topics-item card">Assunto</li>
            <li className="home__topics-item card">Assunto</li>
            <li className="home__topics-item card">Assunto</li>
            <li className="home__topics-item card">Assunto</li>
            <li className="home__topics-item card">Assunto</li>
          </ul>
        </div>

        <div className="home__posts">
          <div className="home__posts-col">
            <h3 className="home__posts-title main-title">Tópicos Abertos</h3>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

          </div>

          <div className="home__posts-col">
            <h3 className="home__posts-title main-title">Dúvidas Abertas</h3>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

            <a href="" className="home__posts-item card">
              <h3 className="home__posts-item-title">Lorem ipsum dolor sit amet consectetur.</h3>

              <span class="home__posts-item-verified lnr lnr-checkmark-circle"></span>

              <p className="home__posts-item-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

              <span className="home__posts-item-tag">Matemática</span>
              <span className="home__posts-item-tag">Lógica</span>
            </a>

          </div>
        </div>
      </HomeContent>
    </>
  );
}
