import Imagem from '../../../assets/luiz_header.jpg'
import data from './data'
import '../header/header.css'

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={Imagem} alt="Luiz Felipe"/>
        </div>
        <h3>Luiz Felipe</h3>
        <p>
          Essa página está em construção. <p>
          Logo, haverá edição dos textos aqui para que eu possa colocar as minhas experiências e habilidades.
        </p>
          
        </p>
        <div className="header__cta">
          <a href='#contact' className='btn primary'>Vamos conversar</a>
          <a href='#portifolio' className='btn light'>Meu trabalho</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target={'_blank'} rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  )
}

export default Header