import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {

  const [tarefasName, setTarefasName] = useState();


  return (
    <div className="container">
    <h1>Lista de Tarefas</h1>
    <p>{tarefasName}</p>
    <input 
      type="text" 
     placeholder="Digite uma tarefa..." 
     onChange={e => setTarefasName(e.target.value)}
    />
    
    <button type="button">Adicionar</button>

    <Card name="Devocional" time="1h30"/>
    <Card name="Estudar Frontend" time="2h00"/>
    <Card name="Estudar Administração" time="1h00"/>
    <Card name='Estudar Psicologia' time='1h00'/>
    </div>
  )
}

