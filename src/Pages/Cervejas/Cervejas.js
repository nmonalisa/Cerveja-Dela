import React, { useState } from 'react';
import HeaderPage from '../../components/HeaderPage/HeaderPage'
import Rotulo from '../../components/Rotulo/Rotulo'
import BackToTopBtn from '../../components/BackToTopBtn/BackToTopBtn'
import FooterPage from '../../components/FooterPage/FooterPage'
import description from './descricaoCervejas'
import './style.css';


function Cervejas() {
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
      <div className={'header-box'}>
        <HeaderPage />
      </div>
      <main>
        <section>
          <Rotulo
            catImg={require('../../assets/rotulo_weiss.png')}
            typeBeer='Weissbier '
            description={description.weiss}
            slogan='A Clássica!'
            cupImage={require('../../assets/weissbeer-cup.png')}
            cupName='Weizen'
            temperature='3-5°C'
            ibuImage={require('../../assets/ibu-10.png')}
            tableBeer={require('../../assets/periodic-table-weiss.png')}
            harmony={'peixe, comida japonesa e quejos suaves'}
          />
        </section>

        <section>
          <Rotulo
            catImg={require('../../assets/rotulo-stout.png')}
            typeBeer='Dry Stout'
            description={description.stout}
            slogan='Escura, cremosa e deliciosa!'
            cupImage={require('../../assets/pint.png')}
            cupName='Pint'
            temperature='5-7°C'
            ibuImage={require('../../assets/ibu-27.png')}
            tableBeer={require('../../assets/periodic-table-stout.png')}
            harmony={'chocolate ao leite e petit gateau'}
          />
        </section>

        <section>
          <Rotulo
            catImg={require('../../assets/rotulo-lager.png')}
            typeBeer='Lager'
            description={description.lager}
            slogan='Leve, refrescante e marcante!'
            cupImage={require('../../assets/pokal2.png')}
            cupName='Pokal'
            temperature='3-4°C'
            ibuImage={require('../../assets/ibu-12.png')}
            tableBeer={require('../../assets/periodic-table-lager.png')}
            harmony={'saladas, peixes grelhados, aves e queijos suaves'}
          />
        </section>
        {showBackToTopBtn && <BackToTopBtn />}
      </main>
      <FooterPage />
    </>
  )
};

export default Cervejas; 