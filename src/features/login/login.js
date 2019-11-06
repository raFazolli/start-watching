import React from 'react';
import styled from 'styled-components';
import Input from '../../components/input';
import Button from '../../components/button';
import bgLogin from '../../assets/images/bg-login.jpg';

const Login = () => {
  return(
    <LoginStyled>
      <ContainerLogin>
        <Input id="login" type="text" name="usuario" label="Usuário"></Input>
        <Input id="password" type="password" name="senha" label="Senha"></Input>
        <Button text="Entrar"></Button>
      </ContainerLogin>
    </LoginStyled>
  )
}

const LoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, .70), rgba(0, 0, 0, .70)), url(${bgLogin});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerLogin = styled.div`
  max-width: 400px;
  box-sizing: border-box;
  padding: 40px;
  background: rgba(0, 0, 0, .75);
`;

export default Login;