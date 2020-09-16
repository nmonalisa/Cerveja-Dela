import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function Menu({ closeMenuOnClick }) {
  return (
    <section className='menu-box'>
      <div>
        <header
          onClick={() => closeMenuOnClick()}
          className='menu-close'>
          X
          </header>
        <figure>
          <Link to='/'>
            <img className='menu-logo' src={require('../../assets/logo_with-circle.png')} alt='Logotype' />
          </Link>
        </figure>
        <main className='menu-text'>
          <div>
            <Link className='menu-text-item' to='sobre'>
              HISTÓRIA
              </Link>
          </div>
          <div>
            <Link className='menu-text-item' to='cervejas'>
              CERVEJAS
            </Link>
          </div>
          <div>
            <Link className='menu-text-item' to='/midia'>
              NA MÍDIA
              </Link>
          </div>
          <div>
            <Link className='menu-text-item' to='/contato'>
              CONTATO
              </Link>
          </div>
          <div className='menu-text-border'></div>
        </main>
      </div>
      <aside className='menu-slogan'>
        A força da mulher cervejeira!
        </aside>
    </section>
  )
}

export default Menu;