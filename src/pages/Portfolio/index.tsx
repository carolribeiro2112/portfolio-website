import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header';

import {Div, Cards} from './styles';


const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Header/>
      <Div>
        <p>Aqui estão alguns links do github de trabalhos já feitos para estudo</p>
      </Div>
      
      <Cards>
        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>

        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG" alt=""/>
          </div>
          <div className="content">
            <p>descrição projeto</p>
            <a href="teste" target="_blank">link github</a>
          </div>
        </div>
      </Cards>
    </>
  )
}

export default Portfolio;