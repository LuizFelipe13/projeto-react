
import Navbar from './sections/about/navbar/Navbar';
import About  from './sections/about/About';
import Services from './sections/about/services/Services';
import Portifolio from './sections/about/portifolio/Portifolio';
import Testemonials from './sections/about/testemonials/Testemonials';
import Faqs from './sections/about/faqs/Faqs';
import Header from './sections/about/header/Header';
import Contact from './sections/about/contact/Contact';
import Footer from './sections/about/footer/Footer';
import FloatinNav from './sections/about/floating nav/FloatinNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portifolio/>
      <Testemonials/>
      <Faqs/>
      <Contact/>
      <Footer/>
      <FloatinNav/>
    </main>
  )
}

export default App