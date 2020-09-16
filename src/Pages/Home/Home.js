import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
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

        <figure className='hop-img-box'>
          <img className={'hop-img'} src={require('../../assets/beer-cut.png')} alt='Foto lúpulo' />
        </figure>
        <nav className={'btn-box'}>
          <Link to='/cervejas'>
            <button className={'cervejas-btn'}>
              Conheça as cervejas
            </button>
          </Link>
        </nav>
      </main>
    </>
  )
};

export default Home; 