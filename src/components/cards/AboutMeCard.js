import React, { useContext } from 'react';

import { PresentationContext } from '../../contexts/presentation-context';

import classes from './AboutMeCard.module.css';

import Card from './Card';

const AboutMeCard = () => {
  const presentation = useContext(PresentationContext);
  return (
    <Card className='mb-3'>
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
              return <p className={classes.indent}>{paragraph}</p>;
            })}
        </div>
      </div>
    </Card>
  );
};

export default AboutMeCard;
