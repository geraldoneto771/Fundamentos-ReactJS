import React, { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
import './styles.css';
import FotoPerfil from '../../assets/img/perfil.png';

import { Card } from '../../componentes/Card';



export function Home() {

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  let  today = new Date();
    
  // estado e função para armazenar valor digitado pelo usuário
  const [tarefasName, setTarefasName] = useState();

  // estado e função para armazenar as tarefas da lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // dados do usuário
  const [user, setUser] = useState({name: '', avatar: ''})

  // criando um novo objeto
  function handleAddTarefa(){
      const newTarefa = {
        name: tarefasName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      };

      // adicionando o objeto no estado tarefas, o prevState é uma variavel auxiliar que pode ter qualquer nome, no qual vai salvar o conteudo anterior
      setTarefas(prevState => [...prevState, newTarefa])
      document.getElementById('inputName').value = '';
      document.getElementById('inputName').focus();
  }


useEffect(() => {
  //corpo do useEffect
  
  //consumindo  informações de uma API para pegar o nome e a foto do perfil do github
  /*async function fetchData(){
   const response = await fetch('https://api.github.com/users/geraldoneto771')
   const data = await response.json();
  
      setUser ({
        name: data.name,
        avatar: data.avatar_url,
        
      });
  }
  fetchData();
*/

  /*
  fetch('https://api.github.com/users/geraldoneto771')
  .then(response  => response.json())
  .then(data => {
      setUser ({
        name: data.name,
        avatar: data.avatar_url,
        
      })
  })
   */
}, []); 

  return (
    <div className="container">
    <header>
      <h1>Meu Planner 2023</h1>
      <div>
        {/*<strong>{user.name}</strong>*/}
         {/*<img src={user.avatar} alt="Foto de perfil" />*/}
         <strong>Geraldo Neto</strong>
         <img src={FotoPerfil} alt="Foto de perfil" />
      </div>
    </header>
    
    <p>{today.toLocaleString("pt-BR", options)}</p>
    <input id='inputName'
      type="text" 
     placeholder="Digite uma tarefa..." 
     onChange={e => setTarefasName(e.target.value)}
    />
    
    <button type="button" onClick={handleAddTarefa}>
      Adicionar</button>

    {
      tarefas.map(tarefa => (
      <Card 
        key = {tarefa.time}
        name={tarefa.name} 
        time={tarefa.time}

      />
    ))
      
    }
    
    </div>
  )
}


// IDEIAS PARA IMPLEMENTAR
/*
 - Adicionar checkbox
 - Adicionar botão de excluir e/ou editar
 - Adicionar botão para ordenar em lista ou blocos/grades
 - Alterar o design para definir dias, mes, semanas, observações etc.
 */