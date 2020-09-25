import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function FooterPage() {
  return (
    <footer className='footer-page-box'>
      <a href='https://www.instagram.com/cervejadela/' target='_blank'>
        <img
          className='footer-page-insta'
          src={require('../../assets/instagram-sketched.png')}
          alt='Ícone Instagram' />
      </a>
      <p>Cerveja Dela Oficial | Desenvolvido por N. Monalisa</p>
    </footer>
  )
};

export default FooterPage;