import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import OuterTile from '../components/OuterTile';
import ProjectCard from '../components/ProjectCard';
import Wrapper from '../components/Wrapper';
import { ProjectsContext } from '../contexts/projects-context';

const ProjectsPage = () => {
  const projects = useContext(ProjectsContext);

  return (
    <Wrapper>
      <Navigation />
      <OuterTile>
        <Background />
        <Container>
          <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4} className='g-3 my-2'>
            {projects.projects.length === 0 && <p>Fetching projects...</p>}

            {projects.projects.length > 0 &&
              Object.entries(projects.projects).map((item) => {
                const value = item[1];
                return <ProjectCard key={value._id} values={value} />;
              })}
          </Row>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default ProjectsPage;
