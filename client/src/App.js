import React from "react";
import { BrowserRoter as Router, Route } from "react-router-dom";
import Join from "./components/join"

const App = () => (
  <Router>
    <Route path="/" exact component={join} />
    <Route path="/chat" exact component={Chat} />
  </Router>
);

export default App;