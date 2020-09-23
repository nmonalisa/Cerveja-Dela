import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


function MenuLarge() {
  return (
    <section className='links-menu-box'>
      <div>
        <Link
          className='links-item'
          to='/sobre'>
          HISTÓRIA
        </Link>
      </div>
      <div>
        <Link
          className='links-item margin-l'
          to='/cervejas'>
          CERVEJAS
            </Link>
      </div>
      <div>
        <Link
          className='links-item'
          to='/midia'>
          NA MÍDIA
            </Link>
      </div>
      <div>
        <Link
          className='links-item'
          to='/contato'>
          CONTATO
        </Link>
      </div>
    </section>
  )
}

export default MenuLarge;