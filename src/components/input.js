import React, { useState } from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const [active, setActive] = useState(false);
  
  const handleActive = (event) => {
    if(event.target.value.length) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
      <LabelStyled>
        <InputStyled isActive={ active } id={props.id} type={props.type} name={props.name} onChange={ handleActive }/>
        <LabelTextStyled isActive={ active } htmlFor={props.id}>{props.label}</LabelTextStyled>
      </LabelStyled>
  );
}


const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 0px;
  outline: 0;
  margin: 5px 0 30px 0;
  padding: 15px 12px 0 12px;
  box-sizing: border-box;
  background: #3b3b3b;
  color: #fff;
  border-bottom: 2px solid transparent;
  transition: all ease-in-out .3s;
  border-color: ${props => props.isActive === true ? 'red': 'transparent'};
  &:focus {
    border-color: red;
  }
`;

const LabelStyled = styled.label`
  position: relative;
`;

const LabelTextStyled = styled.label`
  position: absolute;
  color: #949494;
  font-weight: 300;
  transition: all ease-in-out .3s;
  font-size: ${props => props.isActive ? '.7em': '1.2em'};
  top: ${props => props.isActive ? '-12px': '-8px'};
  left: ${props => props.isActive ? '12px': '10px'};
  ${InputStyled}:focus ~ & {
    font-size: .7em;
    top: -12px;
    left: 12px;
  }
`;

export default Input;