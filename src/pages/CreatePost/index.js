import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import { CreatePostContent } from './styles';

export default function CreatePost() {
  return (
    <>
      <Sidebar />

      <CreatePostContent>
        <h1 className="create-post__title main-title">Criar Tópico</h1>

        <div className="create-post__box">
          <p className="create-post__box-text">Adicione abaixo todas as informações necessárias para publicação do seu conteúdo.</p>
          <p className="create-post__box-text">A publicação é livre e moderadores vão avaliar sua contribuição.</p>

          <form action="">
            <input type="text" name="title" className="input" placeholder="Título do Tópico" />

            <input type="text" name="video" className="input input--4-12" placeholder="Link do Vídeo" />

            <input type="text" name="image" className="input input--4-12" placeholder="Link da Imagem" />

            <input type="text" name="document" className="input input--4-12" placeholder="Link do Documento" />

            <select name="type" id="" className="input input--4-12">
              <option value="default">Tipo do Tópico</option>
              <option value="duvida">Dúvida</option>
              <option value="conteudo">Conteúdo</option>
            </select>

            <select name="type" id="" className="input input--4-12">
              <option value="default">Matéria</option>
              <option value="duvida">Dúvida</option>
              <option value="conteudo">Conteúdo</option>
            </select>

            <select name="type" id="" className="input input--4-12">
              <option value="default">Assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="conteudo">Conteúdo</option>
            </select>

            <textarea name="content" className="input" placeholder="Conteúdo"></textarea>

            <Link to={`/post/10`} className="form__content-btn button">Publicar</Link>

          </form>
        </div>
      </CreatePostContent>

    </>
  );
}
