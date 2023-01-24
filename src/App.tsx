import { useState, useEffect, useRef } from 'react'
import NavbarLocal from './NavbarLocal'
import FormLocal from './FormLocal'
import ButtonLocal from './ButtonLocal'

export default function App() {
    return <div>
      <NavbarLocal name="Nilton" link1="Home" link2="Sobre" link3="Redes Sociais">      </NavbarLocal>
      <FormLocal></FormLocal>
      <ButtonLocal name="Enviar"></ButtonLocal>
    </div> 
}