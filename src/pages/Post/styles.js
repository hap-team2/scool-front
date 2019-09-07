import styled from 'styled-components';

export const PostContent = styled.div`
  position: relative;
  width: calc(100% - 300px);
  float: right;
  padding: 40px;

  .post__box {
    position: relative;
    background: #fff;
    padding: 30px;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .post__box-verified {
    display: block;
    text-align: right;
    color: #56AB00;
    font-size: 30px;
  }

  .post__box-comments {
    top: 30px;
    left: 30px;
    position: absolute;
    font-size: 14px;
    color: #757575;
    text-transform:uppercase;

    span {
      color: #FF8B03;
    }
  }

  .post__box-text {
    margin: 20px auto;
    font-size: 16px;
    line-height: 28px;

      p {
        margin: 1em auto;
      }
  }

  .home__subjects {

      &-title {
        margin: 0 auto 20px;
      }

      &-list {
        display: flex;
        align-items: center;
        list-style: none;
      }

      &-item {
        padding: 40px 20px;
        font-size: 30px;
      }
  }

  .post__box-tags {
    list-style: none;

      &-item {
        display: inline-block;
        padding: 5px 10px;
        margin: 0 15px 0 0;
        border-radius: 10px;
        background: #FF8B03;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
      }
  }

  .comments {

    &__title {
      margin: 30px auto;
    }

    &__list {
      list-style: none;
    }

    &__item {
      position: relative;
      padding: 20px;
      margin: 0 auto 30px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__item-author {
      color: #293462;
      text-transform: uppercase;
      margin: 0 auto 5px;
    }

    &__item-verified {
      position: absolute;
      right: 20px;
      top: 20px;
      color: #56AB00;
      font-size: 30px;
    }
  }
`;