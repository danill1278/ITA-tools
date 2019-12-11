import React, {useState} from 'react';
import styled from "styled-components";

interface Props {
  name: string
  id?: string;
  disabled?: boolean;
}

const StyledFieldSet = styled.fieldset`
 border: none;
 display: inline-block;
`;

const Checkbox: React.FC<Props> = ({id, name}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const HiddenCheckBox = styled.input`
    border: none;
    padding: 0;
    position: absolute;
    width: 0;
    height: 0;`;

  const StyledCheckbox = styled.div`
    position: relative;
    display: inline-block;
    transition: all 150ms;
    border-radius: 5px;
    font-size: 12px;
    border: ${checked ? '1px solid #346ef3;' : '1px solid #dedde3;'}
    width: 20px;
    height: 20px;
    ${HiddenCheckBox}:focus + & {
      border-color: blue;
    }`;

  const Icon = styled.div`
    position: absolute;
    font-size: 18px;
    color: #346ef3;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    visibility: ${checked ? 'visible' : 'hidden'}`;

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked)
  };

  return (
      <StyledFieldSet>
        <HiddenCheckBox
            type='checkbox'
            id={id}
            name={name}
            defaultChecked={checked}
        />

        <StyledCheckbox onClick={handleChange}>
          <Icon>
            <i className="icon icon-check"></i>
          </Icon>
        </StyledCheckbox>
      </StyledFieldSet>
  )
};

export default Checkbox;
