import React, { useState } from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn'
import './style.css';


function Contato() {
  //Lógica de botão para voltar ao topo da página!
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(true)
  window.onscroll = () => scroll();
  const scroll = () => {
    document.documentElement.scrollTop > 50 ?
      setShowBackToTopBtn(true) :
      setShowBackToTopBtn(false)
  }


  return (
    <div >
      <HeaderPage />
      <section className='contacts-box flex'>
        <header className='contacts-header'>
          <p className='contacts-header-p1'>
            FALE COMIGO!
          </p>
          <p className='contacts-header-p2'>Se quiser comprar meus produtos fale diretamente comigo nos links abaixo. Entrego para todo o Brasil via Correios!</p>
        </header>

        <main className='contacts-main'>
          <div>
            <img
              alt='Logotipo WhatsApp'
              src={require('../../assets/whatsapp.png')} />
            <p className='contacts-icon-text'>
              (19) 98177-6607
            </p>
          </div>

          <div>
            <a href='https://www.instagram.com/cervejadela/' target='new_blank'>
              <img
                alt='Logotipo Instagram'
                src={require('../../assets/instagram-sketched.png')}
              />
            </a>
            <p className='contacts-icon-text'> @cervejadela</p>
          </div>
        </main>

        <aside className='contacts-qrcode'>
          <img src={require('../../assets/QRCode.jpeg')} alt="QRCode" />
          <p>
            Aponte sua câmera para o QRCode acima para abrir a conversa do WhatsApp!
          </p>
        </aside>
      </section>
      {showBackToTopBtn && <BackToTopBtn />}
    </div>
  )
};

export default Contato; 