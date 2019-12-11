import React from 'react';
import styled from 'styled-components';
import { btnType } from "../types/shared-types";

interface Props {
  handleClick() : void;
  type?: btnType;
  label: string;
}

const StyledButton = styled.button`
  display: block;
  margin-top: 20px;
  background-color: #20233f;
  color: #ffffff;
  font-weight: bold;
  border-radius: 50px;
  border: 2px solid #20233f;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, .4);
  outline: none;
  padding: 8px 0px;
  width: 160px;
  font-size: 16px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #20233f;
  }`;

const Button: React.FC<Props> = ({handleClick, type = 'button', label}) => {

  return (
      <StyledButton onClick={handleClick} type={type}>
        {label}
      </StyledButton>
  )
};

export default Button;
