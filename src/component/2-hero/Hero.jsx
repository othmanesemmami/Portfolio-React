import './Hero.css'
import Lottie from 'lottie-react'
import Idev from '../../animation/Dev.json'
export default function Hero() {
  return (
    <section className='hero flex '>
   <div className='left-H '>
    <div className='parent '>
     <img src='./ImgPort.jpeg' className='photo'   />
     <span className='icon-verified' />
    </div>
   <h1 className='title'>Software engineer,Full-stack Developer & DevOps  </h1>
   <p className='para'>je suis Othmane SEMMAMI software engineer , etudiant à EMSI Casablanca ,
     developpeur (front & back) en different technologies qui repond aux votre
     besoins avec des astuces en DevOPs ,IA & Big DATA</p>
     <div className='ico flex' >
      <span className='ic icon-instagram' />
      <span className='ic icon-github' />
      <span className='ic icon-linkedin' />
     </div>
   </div>
   <div className='right-H ' >
   <Lottie  
    className='ia' animationData={Idev} style={{height:500}}
   />
   </div>
</section>
  )
}
