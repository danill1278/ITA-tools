import React, {useState} from 'react';
import { inputType } from "../types/shared-types";
import styled from "styled-components";

interface Props {
  name: string
  id?: string;
  placeholder: string;
  type?: inputType;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

const StyledFieldSet = styled.fieldset`
  position: relative;
  border: none;
  margin-top: 20px;`;

const StyledLabel = styled.label`
  position: absolute;
  top: 18px;
  left: 27px;
  font-size: 14px;
  color: #20233f;
  transition: all 0.2s ease-in-out;
`;

const StyledInput = styled.input`
  border-radius: 50px;
  border: 2px solid #20233f;
  padding: 10px 15px;
  font-size: 14px;
  width: 450px;
  color: #20233f;
  background-color: #ffffff;
  outline: none;
  &:focus + ${StyledLabel},
  &:valid + ${StyledLabel} {
    font-size: 12px;
    transform: translate(15px, -30px);
    border-color: #346ef3;
    color: #346ef3;
  }
  &:focus,
  &:valid {
    border-color: #346ef3;
  }`;

const Input: React.FC<Props> = ({name, id, placeholder, type = 'text', onChange}) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (onChange)  {
          onChange(e);
      };
    };

    return (
        <StyledFieldSet>
            <StyledInput
                type={type}
                id={id}
                name={name}
                onChange={handleChange}
                value={inputValue}
                required
            />
            <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
        </StyledFieldSet>
    );
};

export default Input;
