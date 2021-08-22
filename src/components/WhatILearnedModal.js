import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import WhatILearnedSection from './WhatILearnedSection';
import classes from './WhatILearnedModal.module.css';

const WhatILearnedModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='secondary' className='m-1' onClick={handleShow}>
        What I Learned
      </Button>
      <Modal show={show} onHide={handleClose} className={`${classes.rounded}`}>
        <div className='bg-light'>
          <Modal.Header className='modal-header' closeButton>
            <Modal.Title className='font-weight-bold font-monospace text-uppercase'>
              {props.values.title} - What I Learned
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className={`${classes.modal_light_body} align-items-center d-flex flex-column`}
          >
            {props.values.whatILearned.map((section, index) => {
              return (
                <WhatILearnedSection
                  values={section}
                  key={props.values._id + index}
                  parentKey={props.values._id + index}
                />
              );
            })}
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-center'>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default WhatILearnedModal;
