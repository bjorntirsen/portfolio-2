import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

import Card from './Card';
import WhatILearnedSection from '../WhatILearnedSection';
import classes from './Modal.module.css';

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={`${classes.header} text-center`}>
          <h2>{props.title}</h2>
        </header>
        <div className={`${classes.content} align-items-center d-flex flex-column`}>
          {props.values.whatILearned.map((section, index) => {
            return (
              <WhatILearnedSection
                values={section}
                key={props.values._id + index}
                parentKey={props.values._id + index}
              />
            );
          })}
        </div>
        <footer className={classes.footer}>
          <Button onClick={props.onConfirm}>Close</Button>
        </footer>
      </Card>
    );
  };
  const [isShowing, setIsShowing] = useState(false);

  const handleEscape = useCallback((e) => {
    if (e.keyCode === 27) setIsShowing(false);
  }, []);

  useEffect(() => {
    if (isShowing) document.addEventListener('keydown', handleEscape, false);
  }, [handleEscape, isShowing]);

  const toggleShow = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <Button variant='secondary' onClick={toggleShow}>
        New What I Learned
      </Button>
      {ReactDOM.createPortal(
        isShowing ? <Backdrop onConfirm={toggleShow} /> : null,
        document.getElementById('modal-root')
      )}
      {ReactDOM.createPortal(
        isShowing ? (
          <ModalOverlay
            title={props.title}
            message={props.message}
            onConfirm={toggleShow}
            values={props.values}
          />
        ) : null,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
