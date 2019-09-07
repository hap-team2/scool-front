import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import { PostContent } from './styles';
import { comment } from 'postcss';

export default class Post extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem("postID", this.state.currentID);
  }

  state = {
    currentID: this.props.match.params.id,

    posts: [
      {
        "id": 10,
        "user": "joaodasilva",
        "title": "Resumo de Equação de 1º Grau",
        "subject": "Álgebra 1",
        "topic": "Equação de 1º Grau",
        "content": "Uma equação de 1º grau possui uma variável desconhecida com expoente 1 e...",
        "question": false,
        "verified": true,
        "comments": [
          {
            "id": 100,
            "user": "joseantonio",
            "post": 10,
            "content": "Muito obrigado!!",
            "answer": false,
            "verified": false
          },
          {
            "id": 101,
            "user": "beatrizrodrigues",
            "post": 10,
            "content": "Ajudou demais! Mas o que você quis dizer com variável?",
            "answer": false,
            "verified": false
          },
          {
            "id": 102,
            "user": "joaodasilva",
            "post": 10,
            "content": "Uma variável é um valor desconhecido que você quer achar resolvendo a equação!",
            "answer": true,
            "verified": true
          }
        ]
      },
      {
        "id": 11,
        "user": "joaodasilva",
        "title": "Dúvida sobre 1ª Guerra Mundial",
        "subject": "História Geral",
        "topic": "Idade Contemporânea",
        "content": "Na 1ª Guerra Mundial, quem lutou de cada lado e como chamavam os grupos?",
        "question": true,
        "verified": false,
        "comments": [
          {
            "id": 110,
            "user": "joseantonio",
            "post": 11,
            "content": "A Inglaterra e a França estavam de um lado e a Alemanha de outro.",
            "answer": true,
            "verified": true
          },
          {
            "id": 111,
            "user": "gabrielavieira",
            "post": 11,
            "content": "O nome dos grupos era Triplice Entente e Triplice Aliada",
            "answer": true,
            "verified": true
          }
        ]
      },
      {
        "id": 12,
        "user": "matheusdasilva",
        "title": "Duvida sobre meiose",
        "subject": "Biologia",
        "topic": "Citologia",
        "content": "Qual diferença entre meiose e citose?",
        "question": true,
        "verified": false,
        "comments": [
          {
            "id": 120,
            "user": "murilodasilva",
            "post": 12,
            "content": "Também queria saber.",
            "answer": false,
            "verified": false
          },
          {
            "id": 121,
            "user": "gabrielavieira",
            "post": 12,
            "content": "Meiose dimimnui a haploidia.",
            "answer": true,
            "verified": true
          }
        ]
      },
      {
        "id": 13,
        "user": "iaradasilva",
        "title": "Resumo sobre Platão",
        "subject": "Filosofia",
        "topic": "Platão",
        "content": "Platão foi seguidor de Sócrates e escreveu um livro chamado A República ",
        "question": false,
        "verified": true,
        "comments": [
          {
            "id": 130,
            "user": "murilodasilva",
            "post": 13,
            "content": "Que interessante, obrigado!",
            "answer": false,
            "verified": false
          },
          {
            "id": 131,
            "user": "gabrielavieira",
            "post": 13,
            "content": "UAU, valeu mesmo!",
            "answer": false,
            "verified": false
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        <Sidebar />

        <PostContent>

          <h1 className="post__title main-title">{this.state.posts[0].title}</h1>

          <article className="post__box">

            <span class="post__box-verified lnr lnr-checkmark-circle"></span>

            <p className="post__box-comments"><span class="lnr lnr-bubble"></span> {this.state.posts[0].comments.length} comentários</p>

            <div className="post__box-text">
              {this.state.posts[0].content}
            </div>

            <ul className="post__box-tags">
              <li className="post__box-tags-item">{this.state.posts[0].subject}</li>
            </ul>

          </article>

          <div className="home__subjects">
            <h2 className="home__subjects-title main-title">Mídias</h2>

            <ul className="home__subjects-list">
              <li className="home__subjects-item card">Vídeo</li>
              <li className="home__subjects-item card">Imagem</li>
              <li className="home__subjects-item card">Doc</li>
            </ul>
          </div>

          <div className="comments">
            <h3 className="comments__title main-title">Comentários</h3>

            <ul className="comments__list">

              {this.state.posts[0].comments.map(comment => (
                <li krey={comment.id} className="comments__item">
                  <span class="comments__item-verified lnr lnr-checkmark-circle"></span>
                  <h4 className="comments__item-author">{comment.user}</h4>
                  <p>{comment.content}</p>
                </li>
              ))}
            </ul>
          </div>

        </PostContent>
      </>
    )
  }
}
