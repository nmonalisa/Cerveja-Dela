import React from 'react';
import './style.css'

function Rotulo(props) {
  return (
    <div className='beer-box'>

      <main className='beer-main'>
        <figure className={'img-box'}>
          <img className={'cat-img'} src={props.catImg} alt='Rótulo' />
        </figure>
        <div className='description-box'>
          <p className={'beer-slogan bold large-device'}>
            {props.slogan}
          </p>
          A <span className={'bold'}> Dela {props.typeBeer}</span> {props.description}
        </div>
      </main>
      <p className={'beer-slogan bold small-device'}>
        {props.slogan}
      </p>


      <aside className={'extra-infos'}>
        {/* Copo */}
        <section className={'item-box'}>
          <p className={'padding-bot-15'}>
            COPO
         </p>
          <figure className={'padding-bot-15'}>
            <img src={props.cupImage} alt='Copo' className={'cup-img'} />
          </figure>
          <p>
            {props.cupName}
          </p>
        </section>

        {/* Temperatura */}
        <section className={'item-box'}>
          <p className={'padding-bot-15'}>
            TEMPERATURA
         </p>
          <figure className={'padding-bot-15'}>
            <img src={require('../../assets/temperature.png')} alt='Copo' className={'cup-img'} />
          </figure>
          <p>
            {props.temperature}
          </p>
        </section>

        {/* Amargor */}
        <section className={'item-box'}>
          <p className={'padding-bot-15'}>
            AMARGOR
         </p>
          <figure className={'padding-bot-15'}>
            <img src={props.ibuImage} alt='Copo' className={'cup-img'} />
          </figure>
          <p>
            IBU
          </p>
        </section>

        {/* Tabela Periódica */}
        <section className={'item-box'}>
          <p className={'padding-bot-15'}>
            TABELA
         </p>
          <figure className={'padding-bot-15'}>
            <img src={props.tableBeer} alt='Beer Periodic Table' className={'cup-img'} />
          </figure>
          <p>
            PERIÓDICA
          </p>
        </section>

        {/* Harmonização */}
      </aside>

      <section className={'harmony-list'}>
        <p>
          Harmonização: {props.harmony}.
        </p>
      </section>
    </div>
  )
}
export default Rotulo;