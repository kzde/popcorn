// @flow
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Catalog from "./components/Catalog";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
img {
    display: block;
  }
`;

type Props = {};
class App extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/" exact component={Catalog} />
        </Router>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
