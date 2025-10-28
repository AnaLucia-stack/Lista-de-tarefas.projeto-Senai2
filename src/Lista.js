import React, { useState } from 'react';
import Item from './Item'; // importa o componente Item

function Lista({ tarefas, setTarefas }) {
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  return (
    <div class="container">
      <input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)} 
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <Item 
            key={index} 
            tarefa={tarefa} 
            tarefas={tarefas} 
            setTarefas={setTarefas} 
          />
        ))}
      </ul>
    </div>
  );
}

export default Lista; // ✅ export default
