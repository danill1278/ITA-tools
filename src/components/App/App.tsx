import React from "react";
import "./App.css";
import MenuContainer from "./MenuContainer/MenuContainer";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import Auth from "./Auth/Auth";
import ProtectedRoute from "../../HOC/ProtectedRoute";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

interface Props {
  id: string;
}

const App: React.FC<Props> = ({ id }) => {
  return (
    <div className="App">
      <Route exact path="/">
        <MenuContainer />
        <ContentWrapper />
      </Route>
      <ProtectedRoute path="/auth" redirect="/" isAuth={!!id}>
        <Auth />
      </ProtectedRoute>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  id: state.authReducer.uid
});

export default connect(mapStateToProps)(App);
