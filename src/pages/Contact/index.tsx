import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header';
import { Principal, Form } from './styles';


const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato</title>
      </Helmet>
      <Header/>
      <Principal>
        <h1>Contato</h1>
        <p>Você pode entrar em contato comigo através dos seguintes meios:</p>
        <ul>
          <li>Telefone: (11) 96371-0508</li>
          <li>email: carolribeiro2112@gmail.com</li>
          <li>linkedIn</li>
        </ul>
        <p>Ou você pode preencher o seguinte formulário com as suas informações</p>
        <Form action="">
          <input type="text" placeholder="Digite o seu nome..."/> <br/>
          <input type="text" placeholder="Digite o seu email para contato..."/> <br/>
          <select name="" placeholder='Selecione o assunto'>Selecione o assunto</select> <br/>
          <textarea name="" >Digite a sua mensagem</textarea> <br/>
          <button>Enviar</button>
        </Form>
      </Principal>
    </>
  )
}

export default Contato;