import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header';


const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato</title>
      </Helmet>
      <Header/>
      <div>
        <h1>Contato</h1>
        <p>Você pode entrar em contato comigo através dos seguintes meios:</p>
        <ul>
          <li>Telefone: (11) 96371-0508</li>
          <li>email: carolribeiro2112@gmail.com</li>
          <li>linkedIn</li>
        </ul>
        <p>Ou você pode preencher o seguinte formulário com as suas informações</p>
        <form action="">
          <input type="text" placeholder="Digite o seu nome..."/>
          <input type="text" placeholder="Digite o seu email para contato..."/>
          <select name="" id="">Selecione o assunto</select>
          <textarea name="" >Digite a mensagem</textarea>
        </form>
      </div>
    </>
  )
}

export default Contato;