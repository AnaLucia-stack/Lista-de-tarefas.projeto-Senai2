import React, { useState } from "react";
import "../src/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {  //lida com o envio do formulário
    e.preventDefault(); //permite que a pag. nn recarregue
    alert(`Login visual: ${email} / ${password}`);
  };

  return (
    <div className="login-container">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}> //Permite que, ao clicar em “Login”, o React chame sua função handleSubmit.
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
