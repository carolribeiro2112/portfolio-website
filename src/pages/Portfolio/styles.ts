import styled from 'styled-components';

export const Div = styled.div`
  max-width: 900px;
  margin: 0 auto;
  color:#fff;
  font-size: 24px;

  p{
    margin: 24px auto;
    text-align: center;
  }
`;

export const Cards = styled.section`
  max-width: 800px;
  margin: 30px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  .card{
    background-color: #fff;
    

    .cardImg img{
      width: 100%;
    }

    .content{
      text-align: center;
      padding: 24px;
    }
  }
`;