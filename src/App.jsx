import React from 'react';

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//pages
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";
import MedicosPage from "./pages/MedicosPage";

const App = () => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/example" component={ExamplePage} />
        <Route exact path="/medicos" component={MedicosPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
