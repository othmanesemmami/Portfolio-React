import './Contact.css';
import Lottie from 'lottie-react';
import Icontact from "../../animation/Contact.json"
export default function Contact() {
  return (
    <section >
      
       <h1> <span className='icon-email' />
        Contact us</h1> 
        <p className='taC'>Contacter moi pour plus information,Vos suggestions,consultations,et meme vos critiques </p>
       <div className='flex' style={{justifyContent:'space-between'}}>
       <form >
        <div className='flex'><label htmlFor='email'>Address Email:</label>
        <input type='Email'id='email'required  /></div> <br/>
       <div className='flex' style={{marginTop:'24px'}}>
         <label  htmlFor='message'>Votre Message:</label>
        <textarea id='message' required /></div> <br/>
        <button type='submit' className='s'> Enyoyer</button>
       </form>
       <div className='animation flex'>
   <Lottie  
    className='ic' animationData={Icontact} style={{height:300}}
   />
       </div>
       </div>
    </section>
  )
}
