import React from 'react';
import { Container } from 'react-bootstrap';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import OuterTile from '../components/OuterTile';
import Wrapper from '../components/Wrapper';

const ProjectsPage = () => {
  return (
    <Wrapper>
      <Navigation />
      <OuterTile>
        <Background />
        <Container>
          <h1>This is the projects page</h1>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default ProjectsPage;
