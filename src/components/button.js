import React from 'react';
import styled from 'styled-components'

const Button = (props) => {
  return (
    <ButtonStyled>{ props.text }</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  font-size: 1.5em;
  font-weight: 200;
  background-color: rgba(229, 9, 20, 1);
  color: #fff;
  transition: all ease-in-out .3s;
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: rgba(229, 9, 20, .8);
  }
`;

export default Button;