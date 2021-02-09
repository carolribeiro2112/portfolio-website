import styled from 'styled-components';

export const Section = styled.div`
  text-align: center;
  margin-top: 64px;

  img{
    width: 250px;
    height:250px;
    border-radius: 50%;
    border: 5px solid #8257e6;
    margin-bottom: 36px;
  }

  h1,h2,h3,p,li{
    max-width: 500px;
    margin: 0 auto;
    color:#fff;
  }

  h1 {
    font-size: 42px;
    line-height: 52px;
    font-weight: 700;
  }

  h2{
    margin-top: 12px;
    font-size: 24px;
    line-height: 34px;
    font-weight: 400;
    opacity: 0.8;
  }

  p{
    font-size: 18px;
    margin-top: 24px;
  }

  h3{
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 18px;
  }

  li{
    list-style: none;
    margin-bottom: 5px;

    &:last-child{
      margin-bottom:30px;
    }
  }

  
`;