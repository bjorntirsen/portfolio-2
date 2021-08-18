import React from 'react';

import classes from './LandingPage.module.css';

import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Background from '../components/Background';
import OuterTile from '../components/OuterTile';
import Wrapper from '../components/Wrapper';
import Picture from '../components/Picture';

const LandingPage = () => {
  return (
    <Wrapper>
      <OuterTile>
        <Background />
        <Container className={`${classes.landing_container} bg-light pb-4`}>
          <h1 className='fw-bolder font-monospace pt-4 text-center text-dark text-uppercase'>
            Developing the Developer
          </h1>
          <h2 className='fw-light text-center text-dark text-uppercase'>
            the Björn Tirsén Portfolio
          </h2>
          <Picture />
          <p className='font-italic font-monospace p-1 text-center text-dark mx-auto'>
            Witness my journey: from finding my passion for software development
            to graduating as a Junior Fullstack Web Developer in May 2022.
          </p>
          <div className='d-flex justify-content-center'>
            <Button className={`btn-lg fw-bold`}>Enter</Button>
          </div>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default LandingPage;
