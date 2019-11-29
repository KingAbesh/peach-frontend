import React, {Fragment} from 'react';
import HomePage from './Components/HomePage/Homepage/homepage.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
