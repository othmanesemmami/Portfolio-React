import React, { useEffect, useState } from 'react'
import './Header.css'
export default function Header() {
  const [show,Setshow]=useState(false)
  const [them,Setthem]=useState(localStorage.getItem("id")??"dark")
  useEffect((  )=>{
    if(them==="light"){document.body.classList.remove("dark")
      document.body.classList.add("light")
     }
     else{document.body.classList.remove("light")
      document.body.classList.add("dark")}
  },[them])
  return (
    <header className=' flex'>
      <button  className='menu icon-menu'  onClick={() => { Setshow(true) }}/>
      <div />
      <nav>
    <ul className='flex'>
      <li><a href="">About</a></li>
      <li><a href="">Article</a></li>
      <li><a href="">Projet</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Contact</a></li>
    </ul>
      </nav>
      <button className='mood flex' onClick={()=>{
        localStorage.setItem("id",them==="dark"?"light":"dark" )
        Setthem(localStorage.getItem("id"))
      }}   >
        
        {them==="dark"?<span  className='icon-moon-o '></span>:<span  className='icon-sun '></span>}
      </button>
      {show && <div className='fixed'>

     <ul className='modal'>
        <li >
          <button className="icon-remove" onClick={() => { Setshow(false) }}  /> </li>
        <li><a href="">About</a></li>
      <li><a href="">Article</a></li>
      <li><a href="">Projet</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Contact</a></li>
        </ul>

      </div>}
      
       
      
    </header>
  )
}
