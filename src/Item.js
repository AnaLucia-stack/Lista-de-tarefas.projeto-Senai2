import React from 'react';

function Item({ tarefa, tarefas, setTarefas }) {
  const alternarConcluida = () => {
    const novasTarefas = tarefas.map((t) =>
      t === tarefa ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(novasTarefas);
  };

  const removerTarefa = () => {
    const novasTarefas = tarefas.filter((t) => t !== tarefa);
    setTarefas(novasTarefas);
  };

  return (
    <li>
     <span className={tarefa.concluida ? 'concluida' : ''}>
  {tarefa.texto}
</span>

      <button onClick={alternarConcluida}>
        {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
      </button>
      <button onClick={removerTarefa}>Remover</button>
    </li>
  );
}

export default Item; // ✅ export default
