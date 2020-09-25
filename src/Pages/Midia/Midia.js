import React, { useState } from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import MediaItem from '../../components/MediaItem/MediaItem'
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn'
import FooterPage from '../../components/FooterPage/FooterPage'
import './style.css'

function Midia() {
  //Lógica de botão para voltar ao topo da página!
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(true)
  window.onscroll = () => scroll();
  const scroll = () => {
    document.documentElement.scrollTop > 50 ?
      setShowBackToTopBtn(true) :
      setShowBackToTopBtn(false)
  }

  return (
    <>
      <HeaderPage />
      <div className='media-container'>
        <section className='media-description'>
          <p className='media-description-text1'>NA MÍDIA</p>
          <p className='media-description-text2'>Conheça um pouco mais sobre como meu trabalho está repercutindo na mídia. Conheça também meu acervo de fotos! </p>
        </section>

        <section className='margin-b'>

          <header className='media-section'>
            <img
              className='icon'
              src={require('../../assets/video.png')}
              alt='Video' />
            <p className='media-section-title'>Vídeos</p>
          </header>

          <main className='media-flexbox'>
            <div className='media-item'>
              <iframe
                width="100%"
                height="500px"
                src="https://www.youtube.com/embed/wx4sE4hT6pE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
              <label className='media-label'>Entrevista no quadro “Por onde anda?” da Unifal-MG</label>
            </div>
            <div className='media-item'>
              <main className='media'>
                <a
                  href="https://www.facebook.com/watch/?v=384268325533057&extid=PpdvHnBAGXxr4YUh" target='new_blank'>
                  <img src={require('../../assets/media2.png')} alt='Media' />
                </a>
              </main>
              <label className='media-label'>
                Entrevista para rádio Cidade Livre
             </label>
            </div>
          </main>
        </section>

        <section className='margin-b'>
          <header className='media-section'>
            <img
              className='icon'
              src={require('../../assets/newspaper.png')}
              alt='Schedule' />
            <p className='media-section-title'>Matérias</p>
          </header>

          <main className='media-flexbox'>
            <a
              target='_blank'
              className='media-flexbox-anchor'
              href='https://www.minhasaojose.com.br/bianca-vitto-conheca-a-1a-mulher-rio-pardense-a-fabricar-cervejas-artesanais/'>
              <img
                className='media-flexbox-check'
                src={require('../../assets/check.png')} alt='Topic' />
                Matéria para o site "Minha São José" onde Bianca Vitto conta um pouco sobre a fabricação da cerveja DELA e o papel da mulher no meio cervejeiro. </a>
          </main>
        </section>

        <section className='margin-b'>
          <header className='media-section'>
            <img
              className='icon'
              src={require('../../assets/event.png')}
              alt='Schedule' />
            <p className='media-section-title'>Eventos</p>
          </header>

          <main className='media-flexbox'>
            <MediaItem
              src={require('../../assets/event1.jpeg')}
              width='90%'
              alt='Event1'
              label='Degustação da DELA e palestra no evento "Mulher Que Faz 2019"'
            />
            <MediaItem
              src={require('../../assets/event2.jpeg')}
              width='90%'
              alt='Event2'
              label='Degustação no "BY ERICA" em São José do Rio Pardo/SP'
            />
            <MediaItem
              src={require('../../assets/event3.jpeg')}
              width='90%'
              alt='Event3'
              label='Entrevista na rádio Cidade Livre no programa da Priscila Abreu'
            />
            <MediaItem
              src={require('../../assets/event4.jpeg')}
              width='90%'
              alt='Event4'
              label='1º cerveja cigana da DELA feita na Cervejaria Senhorita em Paraguaçu/MG'
            />
            <MediaItem
              src={require('../../assets/archive2.jpeg')}
              width='90%'
              alt='Event5'
              label='NEIPA COLAB produzida por vários cervejeiros caseiros (Poços de Caldas/MG)'
            />
          </main>
        </section>

        <section className='margin-b'>
          <header className='media-section'>
            <img
              className='icon'
              src={require('../../assets/cat (1).png')}

              alt='Cat' />
            <p className='media-section-title'>Clientes Especiais =)</p>
          </header>
          <main className='media-flexbox'>
            <MediaItem
              src={require('../../assets/cat1.jpeg')}
              width='90%'
              alt='Cat'
              label='Curiosa com o sabor da DELA Lager!'
            />
            <MediaItem
              src={require('../../assets/cat4.jpeg')}
              width='90%'
              alt='Cat'
              label='Gato propaganda oficial da DELA: Anakin!'
            />
            <MediaItem
              src={require('../../assets/cat3.jpeg')}
              width='90%'
              alt='Cat'
              label='Adepto do deboísmo!'
            />

            <MediaItem
              src={require('../../assets/cat2.jpeg')}
              width='90%'
              alt='Cat'
              label='O Anakin também aprovou a DELA de frutas vermelhas!'
            />
          </main>
        </section>

        <section className='margin-b'>
          <header className='media-section'>
            <img
              className='icon'
              src={require('../../assets/camera.png')}
              alt='Camera' />
            <p className='media-section-title'>Acervo pessoal</p>
          </header>

          <main className='media-flexbox'>
            <MediaItem
              src={require('../../assets/archive1.jpeg')}
              width='90%'
              label='Acervo pessoal'
              alt='Bianca Vitto'
            />
            <MediaItem
              src={require('../../assets/archive3.jpeg')}
              width='90%'
              label='Acervo pessoal'
              alt='Bianca Vitto'
            />
          </main>
        </section>
        {showBackToTopBtn && <BackToTopBtn />}
      </div>
      <FooterPage />
    </>
  )
};

export default Midia; 