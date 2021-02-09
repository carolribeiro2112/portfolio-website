import React from 'react';
import {Helmet} from 'react-helmet';
import Header from '../../components/Header';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <div>
        <img src="https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-19/s320x320/57267825_311939399481970_9045825433232211968_n.jpg?_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_ohc=fe6FX_RJTVMAX_V0q5C&tp=1&oh=65096186666d0069c92545b4a019b7c5&oe=6048E8F9" alt=""/>
        <h1>Ana Carolina Ribeiro</h1>
        <h2>Engenheira Química em transição de carreira, apaixonada por programação</h2>
        <p>Estudante de desenvolvimento web com foco para o front-end</p>
        <h3>Tecnologias:</h3>
        <ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React JS</li>
        </ul>
      </div>
    </>
  )
}

export default Home;