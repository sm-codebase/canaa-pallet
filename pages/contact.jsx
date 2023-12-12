import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Fale conosoco' message='Preecha o formulario abaixo para que nossa equipe possa retornar o seu contato.' />
        <Contact />
       
    </div>
  )
}

export default contact