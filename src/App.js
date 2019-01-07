// @flow
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./components/Catalog";

type Props = {}
class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Catalog} />
        </Router>
      </div>
    );
  }
}

export default App;
