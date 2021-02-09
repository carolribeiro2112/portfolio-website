import styled from 'styled-components';
import {shade} from 'polished';


export const Principal = styled.section`
  text-align: center;
  max-width: 800px;
  margin: 30px auto;
  color: #fff;

  h1{
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 32px;
  }

  p{
    margin-bottom: 24px;
    font-size: 18px;
  }

  li{
    list-style: none;
    margin-bottom: 12px;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  input, select {
    width: 500px;
    height: 50px;
    margin-top: 20px;
    padding: 0 32px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
  }

  textarea{
    width: 500px;
    height: 150px;
    margin-top: 20px;
    padding: 0 32px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    font-family: 'Roboto';
    font-size: 16px;
  }

  button {
    margin-top: 20px;
    width: 500px;
    height: 70px;
    border: 0;
    border-radius: 5px;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
  }
`;
