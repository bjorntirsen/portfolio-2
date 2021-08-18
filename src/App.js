import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Switch>
      <Route path='/projects'>
        <ProjectsPage />
      </Route>
      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
  );
}

export default App;
