import React from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import './style.css'

function Midia() {
  return (
    <>
      <HeaderPage />
      <main className='media-container'>

        <section className='media-description'>
          <p className='media-description-text1'>NA MÍDIA</p>
          <p className='media-description-text2'>Conheça um pouco mais sobre como meu trabalho está repercutindo na mídia. Conheça também meu acervo de fotos! </p>
        </section>

        <section className='margin-b'>
          <div className='media-section'>
            <img
              className='icon'
              src={require('../../assets/video.png')}
              alt='Video' />
            <p className='media-section-title'>Vídeos</p>
          </div>
          <div className='media-box'>
            <div className='media-item'>
              <iframe
                className='media-item'
                width="100%"
                height="500px" src="https://www.youtube.com/embed/wx4sE4hT6pE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
              <label className='media-label'>Participação em projeto de divulgação científica</label>
            </div>
            <div className='media-item'>
              <main className='media'>
                <iframe src='https://www.facebook.com/watch/?v=384268325533057&extid=PpdvHnBAGXxr4YUh'>
                </iframe>
              </main>
              <label className='media-label'>Entrevista para rádio Cidade Livre</label>
            </div>
          </div>
        </section>

        <section className='margin-b'>
          <div className='media-section'>
            <img
              className='icon'
              src={require('../../assets/event.png')}
              alt='Schedule' />
            <p className='media-section-title'>Eventos</p>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/event1.jpeg')}
                width='90%'
                alt='Event1'
              />
              <label className='media-label'>Evento Mulher que Faz 2019 (Cidade/ES)</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/event2.jpeg')}
                width='90%'
                alt='Event2'
              />
              <label className='media-label'>Evento Mulher que Faz 2019 (Cidade/ES)</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/event3.jpeg')}
                alt='Event3'
              />
              <label className='media-label'>Entrevista para rádio Cidade Livre com Priscila Abreu</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/event4.jpeg')}
                alt='Event4'
              />
              <label className='media-label'>Degustação by Érica</label>
            </div>
          </div>
        </section>

        <section className='margin-b'>
          <div className='media-section'>
            <img
              className='icon'
              src={require('../../assets/cat (1).png')}
              alt='Cat' />
            <p className='media-section-title'>Clientes Especiais =)</p>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/cat1.jpeg')}
                width='90%'
                alt='Cat'
              />
              <label className='media-label'>Legenda</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/cat2.jpeg')}
                width='90%'
                alt='Cat'
              />
              <label className='media-label'>Aprovado por Anakin!</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/cat3.jpeg')}
                width='90%'
                alt='Cat'
              />
              <label className='media-label'>Preguiça, cerveja e calor! ^^ </label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/cat4.jpeg')}
                width='90%'
                alt='Cat'
              />
              <label className='media-label'>Legenda</label>
            </div>
          </div>
        </section>

        <section className='margin-b'>
          <div className='media-section'>
            <img
              className='icon'
              src={require('../../assets/camera.png')}
              alt='Camera' />
            <p className='media-section-title'>Acervo pessoal</p>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/archive1.jpeg')}
                width='90%'
                alt='Bianca Vitto'
              />
              <label className='media-label'>Legenda do Video1</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/archive2.jpeg')}
                width='90%'
                alt='Bianca Vitto'
              />
              <label className='media-label'>Legenda do Video1</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/archive3.jpeg')}
                width='90%'
                alt='Bianca Vitto'
              />
              <label className='media-label'>Legenda do Video1</label>
            </div>
          </div>

          <div className='media-box'>
            <div className='media-item'>
              <img
                src={require('../../assets/archive.jpeg')}
                width='90%'
                alt='Bianca Vitto'
              />
              <label className='media-label'>Produção em parceria com a Cervejaria Senhorita</label>
            </div>
          </div>
        </section>

      </main>
    </>
  )
};

export default Midia; 