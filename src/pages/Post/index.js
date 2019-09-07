import React, { Component } from 'react';

import Sidebar from '../../components/Sidebar';
import { PostContent } from './styles';

export default class Post extends Component {
  render() {
    return (
      <>
        <Sidebar />

        <PostContent>
          <h1 className="post__title main-title">Lorem ipsum dolor sit amet.</h1>

          <article className="post__box">

            <span class="post__box-verified lnr lnr-checkmark-circle"></span>

            <p className="post__box-comments"><span class="lnr lnr-bubble"></span> 10 comentários</p>

            <div className="post__box-text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem similique obcaecati, qui vero quia quibusdam sit nobis quidem autem soluta a explicabo quaerat tempora cum mollitia corrupti praesentium incidunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam, possimus architecto officia et animi placeat cupiditate id cumque accusantium, doloremque consequatur maiores minima ipsam reprehenderit autem obcaecati cum, atque repudiandae perferendis voluptatum numquam temporibus! Enim odio illo perspiciatis, cum necessitatibus quidem! Excepturi cumque omnis ut veritatis! Facere, illum repellat.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem similique obcaecati, qui vero quia quibusdam sit nobis quidem autem soluta a explicabo quaerat tempora cum mollitia corrupti praesentium incidunt!</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorem similique obcaecati, qui vero quia quibusdam sit nobis quidem autem soluta a explicabo quaerat tempora cum mollitia corrupti praesentium incidunt!</p>
            </div>

            <ul className="post__box-tags">
              <li className="post__box-tags-item">Matemática</li>
              <li className="post__box-tags-item">Matemática</li>
              <li className="post__box-tags-item">Matemática</li>
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
              <li className="comments__item">
                <span class="comments__item-verified lnr lnr-checkmark-circle"></span>
                <h4 className="comments__item-author">Nome do Autor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quisquam nisi dolor eius itaque odit obcaecati debitis repellat cumque dolorum?</p>
              </li>
              <li className="comments__item">
                <h4 className="comments__item-author">Nome do Autor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quisquam nisi dolor eius itaque odit obcaecati debitis repellat cumque dolorum?</p>
              </li>
              <li className="comments__item">
                <h4 className="comments__item-author">Nome do Autor</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quisquam nisi dolor eius itaque odit obcaecati debitis repellat cumque dolorum?</p>
              </li>
            </ul>
          </div>

        </PostContent>
      </>
    )
  }
}
