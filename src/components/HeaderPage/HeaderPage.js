import React from 'react';
import './style.css';


function HeaderPage() {
  return (
    <>
      <header>
        <figure className={'menuImg-box'}>
          <img className={'menuImg'} src={require('../../assets/menu.png')} alt='Menu' />
        </figure>
        <figure className={'logoImg-box'}>
          <img className={'logoImg'} src={require('../../assets/logo_with-circle.png')} alt='Logotype' />
        </figure>
      </header>
    </>
  )
}

export default HeaderPage;