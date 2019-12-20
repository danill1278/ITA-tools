import React from 'react';
<<<<<<< HEAD
import '../../assets/fonts/FontAwesome.css';
import styled from "styled-components";
=======
import './App.css';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import { changeProjectTitle } from '../../store/actions';
>>>>>>> 19055f3d2757ed096daaa8e4f8e74c86b72692ee
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Page = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  background-color: rgb(248, 247, 255);
  box-sizing: border-box;
`;

export const App = () => {
  return (
    <Page className="App">
      <MenuContainer />
      <ContentWrapper />
<<<<<<< HEAD
    </Page>
=======
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <Button variant="contained" color="secondary">
        Submit
      </Button>

      <form className="form" noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
>>>>>>> 19055f3d2757ed096daaa8e4f8e74c86b72692ee
  );
};
