import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProjectsContext } from './contexts/projects-context';

import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [projects, setProjects] = useState([]);

  function fetchProjects() {
    const url = 'https://bjorns-portfolio-api.herokuapp.com/api/v1/projects';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data.data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      <Switch>
        <Route path='/projects'>
          <ProjectsPage />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </ProjectsContext.Provider>
  );
}

export default App;
