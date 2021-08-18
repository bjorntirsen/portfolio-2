import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import ReactPage from './pages/ReactPage';

function App() {
  return (
    <Switch>
      <Route path='/react'>
        <ReactPage></ReactPage>
      </Route>
      <Route path='/'>
        <LandingPage></LandingPage>
      </Route>
    </Switch>
  );
}

export default App;
