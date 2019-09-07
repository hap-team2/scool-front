import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  align-items: center;

  .banner {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100vh;
    text-align: center;
  }

  .image {
    margin: 0 auto;
  }

  .form {
    display: flex;
    align-items: center;
    background: #fff;
    height: 100vh;

    &__content {
      width: 60%;
      margin: 0 auto;
      text-align: center;
    }

    &__content-title {
      margin: 0 auto 50px;
    }

    &__content-input {
      margin: 0 auto 20px;
    }

    &__content-btn {
      cursor: pointer;
      display: inline-block;

      &:hover {
        opacity: .6;
      }
    }
    
  }
  
`;