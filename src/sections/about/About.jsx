import AboutImage from '../../assets/sobre.jpg'
import CV from '../../assets/CURRICULO.pdf'
import Resume from '../../assets/RESUME.pdf'
import data from './data'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import './about.css'
//import data from './navbar/data';

const About = () => {
  return (
    <section id='about'>
     <div className="container about__container">

          <div className="about__left">
                    <div className="about__portrait">
                         <img src={AboutImage} alt="Sobre"></img>
                    </div>
              
          </div>
          <div className="about__right">
              <h2>Sobre mim</h2>
              <div className="about__cards">
                {
                  data.map(item => (
                    <Card key={item.id} className="about__card">
                      <span className='about__card-icon'>{item.icon}</span>
                      <h5>{item.title}</h5>
                      <small>{item.description}</small>
                    </Card>
                  ))
                }
                    
                    

              </div>
              <p>
                        Contruir projetos no ramo da tecnologia da informação é algo que eu amo. 
                        Trabalho em TI há mais de 10 anos em, nos últimos dois anos, tenho trabalhado em 
                        suporte e desenvolvimento de sistemas. kkkkkkkkkk
                        kkkkkkkkkkkkkkkkkkkkkkkk
                        kkkkkkkkkkkkkkkkkkkk
                        Eu estou sempre motivado a fazer mais!
                </p>
                    <a href={CV} download className='btn primary'>Baixar meu currículo - Português
                    <HiDownload/></a>
                    <a href={Resume} download className='btn primary'>Download CV - English
                    <HiDownload/></a>  
              
          </div>
          
      </div> 
      
    </section>
  )
}

export default About
