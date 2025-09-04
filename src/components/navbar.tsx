import "../App.css"
import { useContext } from "react"
import { DarkLightContext, type TDarkLightContext } from "./darklight.context"
import { Link } from 'react-scroll';
import imag_sun from "../assets/icons/sun.svg"
import imag_moon from "../assets/icons/moon.svg"
import { SkillContext, type TSkillContext } from "./skills.contexty";
export const Navbar = () => {

  const { changeTheme, fnChangeTheme } = useContext<TDarkLightContext>(DarkLightContext)

  const fnThem = () => {
    fnChangeTheme();
  }

  const { skillSelected } = useContext<TSkillContext>(SkillContext)
  return (
    <div>
      <div className="z-10 fixed top-0 p-3 h-16 w-full backdrop-blur-md " ></div>
      <nav className="z-20 fixed top-0 p-3 h-16 w-full flex flex-row justify-between border-b-2 bg-transparent"
        id="navbar"
        style={changeTheme == 'lightTheme' ? { background: '#83cd2950' } : { background: '#2e0d6850' }}
      >
        <a className='self-center nav-item' href="https://www.linkedin.com/in/agustin-m-marrero" target='blank'>
          <h3 className={`self-center nav-item ` + changeTheme}>_agustin_m_marrero</h3>
        </a>
        <div className="nav-content self-center">
          <ul className="nav-items flex flex-row gap-3 items-center">
            <li className={`flex nav-icon ` + changeTheme}>
              <button
                className="justify-center"
                onClick={() => {
                  fnThem()
                }}>{changeTheme == 'lightTheme'
                  ? <img className="" src={imag_moon} alt="icono de luna" width={'30px'} />
                  : <img src={imag_sun} alt="icono de sol" width={'30px'} />}</button></li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="hero" spy={true} smooth={true} duration={500}>HOME</Link> </li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="about" spy={true} smooth={true} duration={500}>ABOUT_Me</Link> </li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="skills" spy={true} smooth={true} duration={500}>SKILLs</Link> </li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="proyects" spy={true} smooth={true} duration={500}>PROJECTs</Link> </li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="certificates" spy={true} smooth={true} duration={500}>CERTIFICATEs</Link> </li>
            <li className={`nav-item p-1 ` + changeTheme}>
              <Link to="contact" spy={true} smooth={true} duration={500}>CONTACT {skillSelected.length > 0
                ? <span className="bg-rose-500 z-30 text-rose-50 rounded-full text-xs h-4 w-4 m-1 absolute top-3 right-1 text-center "
                >{skillSelected.length}<span className="bg-rose-500 z-20 rounded-full h-4 w-4 m-1 fixed top-3 right-1 animate-ping">{skillSelected.length}</span></span>
                : null} </Link> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}