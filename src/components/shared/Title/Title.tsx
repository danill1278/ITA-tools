import React from 'react';
import styled from 'styled-components';
import { titleType } from "../types/shared-types";

interface Props {
  text: string;
  variant: titleType;
  primary?: boolean;
}

const Title: React.FC<Props> = ({variant, primary, text}) => {
  const StyledTitle = styled(variant)`
    font-size: ${variant === 'h1' ? "50px" : variant === 'h2' ? "36px" : '25px'};
    color: ${primary ? '#20233f' : '#ffffff'};
    font-weight: bold;
    margin: 0;`;

  return (
    <StyledTitle>{text}</StyledTitle>
  )
};

export default Title;
