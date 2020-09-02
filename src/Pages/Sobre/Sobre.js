import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import './style.css'

function Sobre() {
  return (
    <>
      <HeaderPage />
      <section className={'who box'}>
        <h1 className='title-box'> QUEM SOU EU? </h1>
        <p>
          Olá!Eu sou a Bianca Vitto e essa é a CERVEJA DELA. Sou Química bacharel, empreendedora e a primeira mulher a fazer cerveja artesanal em São José do Rio Pardo. A DELA foi fundada em 2019 com o objetivo de protagonismo feminino no meio cervejeiro. Com foco na inovação, qualidade e detalhes, a DELA une três paixões: Cerveja, Química e Gatos. Venha conhecer a força da mulher cervejeira!

        </p>
        <figure className={'icon-box'}>
          <img src={require('../../assets/question.png')} alt='Interrogação' className={'icons'} />
        </figure>
      </section>

      <section className={'why box'}>
        <h1 className='title-box'> MINHA MISSÃO </h1>
        <p>
          A CERVEJA DELA tem como missão fortalecer o empreendedorismo feminino no meio cervejeiro e mostrar que mulher sabe sim fazer cerveja!
        </p>
        <figure className={'icon-box'}>
          <img src={require('../../assets/target.png')} alt='Alvo' className={'icons'} />
        </figure>
      </section>
      <footer>
        Rodapé
      </footer>
    </>
  )
};

export default Sobre; 