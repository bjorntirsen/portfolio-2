import React from 'react';

import Picture from '../Picture';
import Card from './Card';

const GetInTouchCard = () => {
  return (
    <Card className='mb-3'>
      <h2 className='font-monospace text-center h3 pt-3'>Get in touch with me:</h2>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='bg-light m-3 rounded-3'>
          <div className='p-3'>
            <Picture />
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <div className='m-2 flex-fill d-flex justify-content-center align-items-center'>
              <a
                className='btn btn-primary btn-lg m-auto'
                href='mailto:bjorntirsen@gmail.com'
                role='button'
              >
                Email me
              </a>
            </div>
            <div className='m-2 flex-fill d-flex justify-content-center align-items-center'>
              <a className='' href='https://www.linkedin.com/in/bjorntirsen'>
                <i
                  className='fab fa-linkedin fa-4x'
                  title='The LinkedIn logo.'
                ></i>
                <span className='sr-only'>The LinkedIn logo.</span>
              </a>
            </div>
            <div className='m-2 flex-fill d-flex justify-content-center align-items-center'>
              <a className='' href='https://github.com/bjorntirsen'>
                <i className='fab fa-github fa-4x' title='The GitHub logo.'></i>
                <span className='sr-only'>The GitHub logo.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GetInTouchCard;
