import Hero from './component/2-hero/Hero'
import Header from './component/1-header/Header'
import Main from './component/3-main/Main'
import Contact from './component/4-contact/Contact'
import Footer from './component/5-footer/Footer'
import { useEffect, useState } from 'react'

function App() {
useEffect(()=>{
  window.addEventListener("scroll",()=>{
window.scrollY>200?Setc(true):Setc(false)
  })
},[])
const [c,Setc]=useState(false)
  return (
    <div id='up' className='container'>
    <Header />
     <Hero />
     <div className='divider' />
     <Main />
     <div className='divider' />
     <Contact />
     <div className='divider' />
     <Footer />
     {
     c && <a href='#up'>
     <button className='icon-keyboard_arrow_up sc'/></a>
     }
     
</div>
    
  )
}

export default App
