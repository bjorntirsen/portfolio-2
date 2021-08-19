import React from 'react';

const WhatILearnedModal = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-secondary m-1'
        data-bs-toggle='modal'
        data-bs-target='#mib-customer-dataModal'
      >
        {' '}
        What I Learned{' '}
      </button>
      <div
        className='modal fade'
        id='mib-customer-dataModal'
        tabIndex='-1'
        aria-labelledby='mib-customer-dataModalLabel'
        aria-hidden='true'
        style={{ display: 'none' }}
      >
        <div className='modal-dialog'>
          <div className='bg-light modal-content'>
            <div className='modal-header'>
              <h5
                className='font-weight-bold modal-title text-uppercase'
                id='mib-customer-dataModalLabel'
              >
                MIB Customer Data - What I Learned
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='align-items-center d-flex flex-column modal-body'>
              <div className='align-items-center d-flex'>
                <i
                  className='fa-3x fab fa-react m-1'
                  title='fab fa-react'
                  aria-hidden='true'
                ></i>
                <span className='sr-only'>fab fa-react</span>
              </div>
              <p className='text-center'>
                In this individual project I learned how to use the hook
                "useContext", as well as working with form validation and login
                functionality in a React app.
              </p>

              <div className='align-items-center d-flex'>
                <i
                  className='fa-3x fas fa-network-wired m-1'
                  title='fas fa-network-wired'
                  aria-hidden='true'
                ></i>
                <span className='sr-only'>fas fa-network-wired</span>
              </div>
              <p className='text-center'>
                We made use of a RESTful CRUD API provided by our teacher.
              </p>
            </div>
            <div className='d-flex justify-content-center modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatILearnedModal;
