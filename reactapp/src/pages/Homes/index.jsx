//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './styles.css'

export function Home() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o nome..." />
    <button type="button">Adicionar</button>
    </div>
  )
}

