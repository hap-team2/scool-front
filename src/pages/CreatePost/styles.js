import styled from 'styled-components';

export const CreatePostContent = styled.div`
  position: relative;
  width: calc(100% - 300px);
  float: right;
  padding: 40px;

  .input {
    margin: 0 auto 20px;
  }

  .input--4-12 {
    width: calc(33.33% - 20px);
    margin: 0 20px 20px 0 ;
  }

  .create-post__title {
    margin: 0 auto 30px;
  }

  select {
    height: 44px;
    background: #fff;
  }
  
  textarea {
    height: 150px;
  }

  .create-post__box-text {
    margin: 10px auto;
  }

  form {
    margin: 30px auto 0;
  }

  .create-post__box {
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px;
    border-radius: 10px;
  }
`;