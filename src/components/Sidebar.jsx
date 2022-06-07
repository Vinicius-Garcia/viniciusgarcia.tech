import imagemLogo from '../assets/perfil.jpg'
import twitter from '../assets/Frame.svg'
import github from '../assets/githab.svg'
import linkedin from '../assets/linkedin.svg'
import './styles.css'

export function Sidebar(){
  return(
    <div className="container">
      <div className="sidebar">
      <img src={imagemLogo} alt="foto pessoal" className="imgLogo" />
      <h2>Vinicius da Silva Garcia</h2>
      <small>Desenvolvedor Web</small>
      <div className="buttons">
      <a href="#">Home</a>
      <a href="#">Sobre</a>
      <a href="#">Projetos</a>
      </div>
      
      </div>
      <div className="social">
           <a href="https://www.linkedin.com/in/vinicius-da-silva-garcia/" target="_blank"><img src={linkedin} alt="icone do linkedin"  /></a>
           <a  href="https://www.github.com/Vinicius-Garcia" target="_blank"><img src={github} alt="icone do github" /></a>
           <a  href="https://www.twitter.com/viniciusdsg1" target="_blank"><img src={twitter} alt="icone do twitter"/></a>
      </div>
    </div>
  )
}