import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import classes from './AboutPage.module.css';
import Background from '../components/Background';
import Navigation from '../components/Navigation';
import OuterTile from '../components/OuterTile';
import Picture from '../components/Picture';
import Card from '../components/UI/Card';
import Wrapper from '../components/Wrapper';
import { PresentationContext } from '../contexts/presentation-context';

const AboutPage = () => {
  const presentation = useContext(PresentationContext);
  console.log(presentation.presentation, 'hi');
  console.log(typeof presentation);

  return (
    <Wrapper>
      <Navigation />
      <OuterTile>
        <Background />
        <Container>
          <Row>
            <Card className={classes.title}>
              <h1 className='font-monospace'>Who is Björn?</h1>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='bg-light p-4 m-3 rounded-3'>
                    <div className='p-3'>
                      <Picture />
                    </div>
                    <h2 className='font-monospace text-center h3'>
                      Get in touch with me:
                    </h2>
                    <div className='p-2 d-flex justify-content-center align-items-center'>
                      <a
                        className='btn btn-primary btn-lg m-auto'
                        href='mailto:bjorntirsen@gmail.com'
                        role='button'
                      >
                        Email me
                      </a>
                      <a
                        className='m-3'
                        href='https://www.linkedin.com/in/bjorntirsen'
                      >
                        <i
                          className='fab fa-linkedin fa-4x'
                          title='The LinkedIn logo.'
                        ></i>
                        <span className='sr-only'>The LinkedIn logo.</span>
                      </a>
                      <a className='m-3' href='https://github.com/bjorntirsen'>
                        <i
                          className='fab fa-github fa-4x'
                          title='The GitHub logo.'
                        ></i>
                        <span className='sr-only'>The GitHub logo.</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <h2 className='font-monospace text-center h3 pt-3'>About me:</h2>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='bg-light p-4 m-3 rounded-3'>
                    {presentation.presentation.length === 0 && (
                      <p className='my-auto font-monospace fw-bold'>
                        Fetching presentation, please wait...
                      </p>
                    )}
                    {presentation.presentation.length > 0 &&
                      presentation.presentation.map((paragraph) => {
                        return <p>{paragraph}</p>;
                      })}
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default AboutPage;
