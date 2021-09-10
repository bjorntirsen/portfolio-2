import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

import Card from '../cards/Card';
import classes from './Modal.module.css';

const ImageModal = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleEscape = useCallback((e) => {
    if (e.keyCode === 27) setIsShowing(false);
  }, []);

  useEffect(() => {
    if (isShowing) document.addEventListener('keydown', handleEscape, false);
  }, [handleEscape, isShowing]);

  useEffect(() => {
    document.body.classList.toggle('modal-open', isShowing);
  }, [isShowing]);

  const toggleShow = () => {
    setIsShowing(!isShowing);
  };

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <Card className={classes.content}>
          <header className={`${classes.header} text-center`}>
            <h2>{props.title}</h2>
          </header>
          <div
            className={`${classes.body} align-items-center d-flex flex-column`}
          >
            {props.values.images.map((image, index) => {
              return (
                <a
                  href={image}
                  key={props.values._id + index}
                  parentKey={props.values._id + index}
                >
                  <img className='img-fluid' src={image} alt={`Screenshot ${index}`} />
                </a>
              );
            })}
          </div>
          <footer className={classes.footer}>
            <Button onClick={props.onConfirm}>Close</Button>
          </footer>
        </Card>
      </div>
    );
  };

  const Dialog = () => {
    return (
      <div className={classes.dialog}>
        <Backdrop onConfirm={toggleShow} />
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={toggleShow}
          values={props.values}
        />
      </div>
    );
  };

  return (
    <>
      <Button variant='secondary' onClick={toggleShow}>
        Images
      </Button>
      {ReactDOM.createPortal(
        isShowing ? <Dialog /> : null,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ImageModal;
