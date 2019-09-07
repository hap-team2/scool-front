import styled from 'styled-components';

export const HomeContent = styled.div`

  position: relative;
  width: calc(100% - 300px);
  float: right;
  padding: 40px;

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
      }
  }

  .home__topics {
    margin: 30px auto 0;

    &-title {
        font-size: 22px;
      }
   
      &-list {
        display: flex;
        align-items: center;
        list-style: none;
      }

      &-item {
        padding: 10px 20px;
      }
  }

  .home__posts {
    display: flex;
    align-items: center;

    &-col {
      width: 50%;
      margin: 0 30px 0 0;

        &:last-child {
          margin: 0;
        }
    }

    &-title {
      margin: 30px auto 15px;
      font-size: 26px;
    }

    &-item {
      font-family: 'Montserrat';
      position: relative;
      display: block;
      text-align: left;
      color: #757575;
      padding: 15px;
      margin: 0 auto 30px;
    }

    &-item-title {
      font-family: 'Montserrat';
    }

    &-item-verified {
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 30px;
      color: #56AB00;
    }

    &-item-comments {
      margin: 10px auto;
      font-size: 12px;

      span {
        color: #FF8B03;
        font-size: 18px;
        vertical-align: middle;
      }
    }

    &-item-tag {
      background: #FF8B03;
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 5px;
      color: #fff;
      margin: 0 10px 0 0;
    }
  }
  
`;
