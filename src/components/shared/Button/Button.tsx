import React from 'react';
import styled from 'styled-components';
import { btnType } from "../types/shared-types";

interface Props {
  handleClick() : void;
  type?: btnType
  label: string
}

const Button: React.FC<Props> = ({handleClick, type = 'button', label}) => {
  const Button = styled.button`
  background-color: #20233f;
  color: #ffffff;
  font-weight: bold;
  border-radius: 50px;
  border: 2px solid #20233f;
  box-shadow: 2.5px 4.33px 29px 0px rgb( 0, 0, 0 );
  outline: none;
  padding: 8px 0px;
  width: 180px;
  font-size: 16pt;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #20233f;
  }`;

  return (
      <Button onClick={handleClick} type={type}>
        {label}
      </Button>
  )
};

export default Button;
