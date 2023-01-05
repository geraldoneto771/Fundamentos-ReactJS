//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o nome..." />
    <button type="button">Adicionar</button>

    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
  )
}

