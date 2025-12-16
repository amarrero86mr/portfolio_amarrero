
import './App.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Hero } from './sections/hero'
import { About } from './sections/about'
import { Skills } from './sections/skills'
import { Certificates } from './sections/certificates'
import { Projects } from './sections/projects'
import { useContext } from 'react'
import { DarkLightContext, type TDarkLightContext } from './components/darklight.context'
import { Element, animateScroll } from 'react-scroll';
import { Contact } from './sections/contact'

function App() {

  const {changeTheme, changeBackground} = useContext<TDarkLightContext>(DarkLightContext)

  const options = {
  duration: 500,
  smooth: true,
  
};

  animateScroll.scrollToTop(options)
  
  return (
    <div className={`backgound ` + changeBackground}>
      <div className={`contain_main ` + changeBackground}></div>
      <div className={`contain ` + changeTheme}>
        <Navbar />
        <main>
          <Element name="hero">
            <section id="hero"><Hero /></section>
          </Element>
          <Element name="about">
          <section id="about"><About /></section>
          </Element>
          <Element name="skills">
          <section id="skills"><Skills /></section>
          </Element>
          <Element name="proyects">
          <section id="projects"><Projects /></section>
          </Element>
          <Element name="certificates">
          <section id="certificates"><Certificates /></section>
          </Element>

          
          <Element name="contact">
           <section id="contact"><Contact /></section>
          </Element>
         
        </main>
        <Footer />
      </div>


    </div>
  )
}

export default App
