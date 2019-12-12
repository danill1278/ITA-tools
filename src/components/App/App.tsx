import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../assets/fonts/FontAwesome.css';
import styled from "styled-components";
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';


const Page = styled.div`
    display: grid;
    grid-template-columns: max-content  1fr;
    background-color: rgb(248,247,255);
    box-sizing: border-box;
`;

export const App = () => {
  return (
    <Page className="App">
      <MenuContainer/>
      <ContentWrapper />
    </Page>
  );
};

