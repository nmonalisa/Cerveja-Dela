import React, { useState } from 'react';
import Menu from '../Menu/Menu'
import MenuLarge from '../MenuLargeDevice/MenuLargeDevice'
import './style.css';
import { Link } from 'react-router-dom';


function HeaderPage() {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuOnClick = () => setShowMenu(true);
  const closeMenuOnClick = () => setShowMenu(false)

  return (
    <>
      <header className='header'>
        <figure className='menuImg-box'>
          <img
            className='menuImg'
            onClick={() => showMenuOnClick()}
            src={require('../../assets/menu.png')}
            alt='Menu' />
        </figure>
        <figure className='logoImg-box'>
          <Link to='/'>
            <img className='logoImg' src={require('../../assets/logo_with-circle.png')} alt='Logotype' />
          </Link>
        </figure>
        <MenuLarge />
      </header>
      {showMenu && <Menu closeMenuOnClick={closeMenuOnClick} />}
    </>
  )
}

export default HeaderPage;