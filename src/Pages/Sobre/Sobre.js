import React, { useState, useEffect } from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn'
import FooterPage from '../../components/FooterPage/FooterPage'
import './style.css'

function Sobre() {
  //Lógica de botão para voltar ao topo da página!
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(true)
  window.onscroll = () => scroll();
  const scroll = () => {
    document.documentElement.scrollTop > 50 ?
      setShowBackToTopBtn(true) :
      setShowBackToTopBtn(false)
  }


  return (
    <div>
      <HeaderPage />
      <div className='boxes-container' >
        <section className={'who box'}>
          <h3 className='title-box'> QUEM SOU EU? </h3>
          <p>
            Olá!Eu sou a Bianca Vitto e essa é a CERVEJA DELA. Sou Química bacharel, empreendedora e a primeira mulher a fazer cerveja artesanal em São José do Rio Pardo, no estado de São Paulo.

        </p>
          <figure className={'icon-box'}>
            <img src={require('../../assets/question.png')} alt='Interrogação' className={'icons'} />
          </figure>
        </section>

        <section className={'why box'}>
          <h3 className='title-box'> POR QUÊ CRIAR A DELA? </h3>
          <p>
            A DELA foi fundada em 2019 com o objetivo de aumentar o protagonismo feminino no meio cervejeiro. Com foco na inovação, qualidade técnica e atenção aos detalhes, a DELA une minhas três paixões: Cerveja, Química e Gatos. Venha conhecer a força da mulher cervejeira!
        </p>
          <figure className={'icon-box'}>
            <img src={require('../../assets/target.png')} alt='Alvo' className={'icons'} />
          </figure>
        </section>

        <section className={'mission box'}>
          <h3 className='title-box'> QUAL É A MISSÃO DA DELA?</h3>
          <p>
            A CERVEJA DELA tem como missão fortalecer o empreendedorismo feminino no meio cervejeiro e mostrar que mulher sabe sim fazer cerveja!
        </p>
          <figure className={'icon-box'}>
            <img src={require('../../assets/mission (1).png')} alt='Missão cumprida' className={'icons'} />
          </figure>
        </section>
      </div>
      {showBackToTopBtn && <BackToTopBtn />}
      <FooterPage />
    </div>
  )
};

export default Sobre; 