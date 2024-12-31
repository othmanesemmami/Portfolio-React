import { useState } from 'react';
import './Main.css';
import {projects}from './projet' ;
export default function Main() {
  const [cu, Setcu] = useState("all");

 

  // Filtrage des projets selon la catégorie sélectionnée
  const filteredProjects = cu === "all" ? projects : projects.filter(project => project.type === cu);

  return (
    <main className='flex'>
      <section className='left flex'>
        <button onClick={() => Setcu("all")} className={cu === "all" ? "active" : null}>Tous les projets</button>
        <button onClick={() => Setcu("html")} className={cu === "html" ? "active" : null}>HTML, CSS, JS</button>
        <button onClick={() => Setcu("react")} className={cu === "react" ? "active" : null}>React</button>
      </section>

      <section className='right flex'>
        {filteredProjects.map(project => (
          <article key={project.id} className='card'>
            <img width={230} src={project.image} alt={project.title} />
            <div className='box'>
              <h3 className='ti'>{project.title}</h3>
              <p className='des'>{project.description}</p>
            </div>
            <div className='flex icone'>
              <div style={{ gap: "11px" }} className='flex'>
                <div className='icon-link' />
                <div className='icon-github' />
              </div>
              <a href='' className='a flex'>More <span style={{ alignSelf: 'end' }} className='icon-arrow_forward' /></a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
