import React from 'react';
import './style.css';

function BackToTopBtn() {
  const backToTop = () => document.documentElement.scrollTop = 0;
  return (
    <img
      onClick={() => backToTop()}
      alt='Botão de voltar ao topo'
      className='up-arrow-img'
      src={require('../../assets/chevron-upwards-arrow (2).png')} />
  )
};

export default BackToTopBtn; 