import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import { HomeContent } from './styles';

export default class Home extends Component {
  state = {
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

  // loadPosts = async e => {
  //   const response = await api.get('/post');

  //   this.setState({
  //     posts: response.data
  //   });

  //   console.log('abaixo2');
  //   console.log(this.state.posts);
  // }

  // componentDidMount() {
  //   // this.loadPosts();
  //   console.log('abaixo2');
  //   console.log(this.state.posts);
  // };

  // handleClick = e => {
  //   let postID = e.getAttribute("data-id");

  //   localStorage.setItem("id", postID);
  // }

  render() {
    return (
      <>
        <Sidebar />
        <HomeContent className="home__content">

          <div className="text-right">
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

              {this.state.posts.map(post => (

                <Link Krey={post.id} to={`/post/${post.id}`} className="home__posts-item card">

                  <h3 className="home__posts-item-title">{post.title}</h3>

                  <span className="home__posts-item-verified lnr lnr-checkmark-circle"></span>

                  <p className="home__posts-item-comments"><span className="lnr lnr-bubble"></span> {post.comments.length} comentários</p>

                  <span className="home__posts-item-tag">{post.subject}</span>
                </Link>
              ))}

            </div>

            <div className="home__posts-col">
              <h3 className="home__posts-title main-title">Dúvidas Abertas</h3>

              {this.state.posts.map(post => (
                <Link Krey={post.id} to={`/post/${post.id}`} className="home__posts-item card" data-id={post.id}>

                  <h3 className="home__posts-item-title">{post.title}</h3>

                  <span className="home__posts-item-verified lnr lnr-checkmark-circle"></span>

                  <p className="home__posts-item-comments"><span className="lnr lnr-bubble"></span> {post.comments.length} comentários</p>

                  <span className="home__posts-item-tag">{post.subject}</span>
                </Link>
              ))}

            </div>
          </div>
        </HomeContent>
      </>
    )
  }
}
