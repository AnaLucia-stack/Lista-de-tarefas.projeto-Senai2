import React, { useState } from 'react';
import Lista from './Lista'; // importa o componente Lista

function Aplicativo() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <Lista tarefas={tarefas} setTarefas={setTarefas} />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default Aplicativo; // ✅ tem que ser export default
