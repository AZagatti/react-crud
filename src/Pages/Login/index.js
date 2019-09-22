import React from "react";

// import { Container } from './styles';

const Login = () => {
  return (
    <form>
      <label>Login:</label>
      <input type="text" placeholder="Digite seu login..." />
      <label>Senha:</label>
      <input type="password" placeholder="Digite sua senha..." />
    </form>
  );
};

export default Login;
