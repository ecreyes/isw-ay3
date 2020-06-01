import React from 'react';

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//pages
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/example" component={ExamplePage} />>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
