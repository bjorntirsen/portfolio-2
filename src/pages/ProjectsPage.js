import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import OuterTile from '../components/OuterTile';
import ProjectCard from '../components/cards/ProjectCard';
import Wrapper from '../components/Wrapper';
import { ProjectsContext } from '../contexts/projects-context';

const ProjectsPage = () => {
  const projects = useContext(ProjectsContext);

  return (
    <Wrapper>
      <Navigation current='projects' />
      <OuterTile>
        <Background />
        <Container>
          {projects.projects.length === 0 && (
            <div className='d-flex justify-content-center align-items-center'>
              <div className='bg-light p-4 m-3 rounded-3'>
                <p className='my-auto font-monospace fw-bold'>
                  Fetching projects, please wait...
                </p>
              </div>
            </div>
          )}

          {projects.projects.length > 0 && (
            <Row
              xs={1}
              sm={1}
              md={2}
              lg={3}
              xl={3}
              xxl={4}
              className='g-3 my-2'
            >
              {Object.entries(projects.projects).map((item) => {
                const value = item[1];
                return <ProjectCard key={value.id} values={value} />;
              })}
            </Row>
          )}
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default ProjectsPage;
