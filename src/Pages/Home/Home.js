import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage';
import FooterPage from '../../components/FooterPage/FooterPage'
import './style.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <HeaderPage />
      <main className={'main-container'}>
        <aside className={'slogan-box'}>
          <div className={'titulo'}>
            CERVEJA DELA
          </div>
          <div className={'slogan'}>
            A força da mulher cervejeira.
          </div>
        </aside>


        <nav className={'btn-box'}>
          <button className='cervejas-btn btn-empty btn1'>
            CERVEJAS SAZONAIS
            <div className='cervejas-btn-soon'>Em breve!</div>
          </button>
          <button className='cervejas-btn btn-empty btn2'>
            CERVEJAS COLABORATIVAS
            <div className='cervejas-btn-soon'>Em breve!</div>
          </button>
          <Link to='/cervejas'>
            <button className='cervejas-btn btn3'>
              CERVEJAS  DE LINHA
            </button>
          </Link>
        </nav>
      </main>

      <div className='cervejas-img-box'>
        <img className='cat' src={require('../../assets/cat-opacity-15.png')} alt='Garrafas de cerveja Dela' />
        <div className='bootle-box'>
          <img className='bottles' src={require('../../assets/bottles_edited.png')} alt='Garrafas de cerveja Dela' />
        </div>
        <img className='atom' src={require('../../assets/physics.png')} alt='Garrafas de cerveja Dela' />
      </div>
      <FooterPage />
    </>
  )
};

export default Home; 