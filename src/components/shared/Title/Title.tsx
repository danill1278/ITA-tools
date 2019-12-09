import React from 'react';
import styled from 'styled-components';
import { titleType } from "../types/shared-types";

interface Props {
  text: string;
  variant: titleType
}

const Title: React.FC<Props> = ({variant, text}) => {
  const Title = styled(variant)`
  font-size: ${variant === 'h1' ? "50px" : variant === 'h2' ? "36px" : '25px'};
  color: #20233f;
  font-weight: bold;
  `;

  return (
    <Title>{text}</Title>
  )
};

export default Title;
