import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header';


const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Header/>
      <h1>Portfolio</h1>
      <p>Aqui estão alguns links do github de trabalhos já feitos para estudo</p>
      <div>
        <img src="" alt=""/>
        <p>descrição projeto</p>
        <a href="teste">link github</a>
      </div>
    </>
  )
}

export default Portfolio;