import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import './style.css';


function Contato() {
  return (
    <div >
      <HeaderPage />
      <section className='contacts-box'>
        <header className='contacts-text'>
          <p className='contacts-text-item text1'>
            FALE COMIGO!
          </p>
          <p className='text2'>Bianca Vitto</p>
        </header>

        <main className='icons-media-box'>
          <div className='icons-media'>
            <img
              className='icons-media-item'
              alt='Logotipo WhatsApp'
              src={require('../../assets/whatsapp.png')} />
            <span>
              (19) 98177-6607
            </span>
          </div>

          <div className='icons-media'>
            <a href='https://www.instagram.com/cervejadela/' target='new_blank'>
              <img
                className='icons-media-item'
                alt='Logotipo Instagram'
                src={require('../../assets/instagram-sketched.png')}
              />
            </a>
            <span> @cervejadela</span>
          </div>
        </main>
      </section>
    </div>
  )
};

export default Contato; 