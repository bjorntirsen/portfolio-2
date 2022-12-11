import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProjectsContext } from './contexts/projects-context';
import { PresentationContext } from './contexts/presentation-context';
import AboutPage from './pages/AboutPage';

import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [projects, setProjects] = useState([]);
  const [presentation, setPresentation] = useState([]);

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

  function fetchPresentation() {
    const url =
      'https://bjorns-portfolio-api.herokuapp.com/api/v1/presentation';
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPresentation(data.data.data.presentation);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchProjects();
    fetchPresentation();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      <PresentationContext.Provider value={{ presentation }}>
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </PresentationContext.Provider>
    </ProjectsContext.Provider>
  );
}

export default App;
