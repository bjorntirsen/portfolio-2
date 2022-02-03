import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LandingPage.module.css';

import { Container } from 'react-bootstrap';
import Background from '../components/Background';
import OuterTile from '../components/OuterTile';
import Wrapper from '../components/Wrapper';
import Picture from '../components/Picture';

const LandingPage = () => {
  return (
    <Wrapper>
      <OuterTile forPage='Landing'>
        <Background forPage='Landing' />
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
            <Link
              className='btn btn-lg btn-primary fw-bold'
              to='/projects'
              role='button'
            >
              Enter
            </Link>
          </div>
        </Container>
      </OuterTile>
    </Wrapper>
  );
};

export default LandingPage;
