import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import classes from './AboutPage.module.css';

import Background from '../components/Background';
import Navigation from '../components/Navigation';
import OuterTile from '../components/OuterTile';
import Card from '../components/cards/Card';
import Wrapper from '../components/Wrapper';
import GetInTouchCard from '../components/cards/GetInTouchCard';
import AboutMeCard from '../components/cards/AboutMeCard';

const AboutPage = () => {
  return (
    <Wrapper>
      <Navigation current='about' />
      <OuterTile>
        <Background />
        <Container>
          <Row>
            <Card className={classes.title}>
              <h1 className='font-monospace'>Who is Björn?</h1>
            </Card>
          </Row>
          <Row>
            <Col md={12} lg={7}>
              <AboutMeCard />
            </Col>
            <Col md={12} lg={5}>
              <GetInTouchCard />
            </Col>
          </Row>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default AboutPage;
