import React from 'react';

import { Col } from 'react-bootstrap';
import ImageModal from '../UI/ImageModal';

import Modal from '../UI/Modal';
import Card from './Card';

import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
  const formattedDate = new Date(
    props.values.dateFirstCompleted
  ).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Col>
      <Card className='h-100 d-flex flex-column'>
        <div className={`${classes.header} text-center p-2`}>
          <p className={classes.date}>{formattedDate}</p>
          <img
            src={props.values.imageCoverUrl}
            className='card-img-top'
            alt={props.values.title}
          />
          <h5 className='card-title text-uppercase font-monospace fw-bold pt-3'>
            {props.values.title}
          </h5>
          <h6 className='card-title text-uppercase pb-3'>
            {props.values.subtitle}
          </h6>
        </div>
        <div className='text-center p-2 flex-grow-1'>
          <p className=''>{props.values.description}</p>
        </div>
        <div className={`${classes.footer} text-center p-2`}>
          {props.values.siteLink ? (
            <a href={props.values.siteLink} className='btn btn-primary m-1'>
              Link To Site
            </a>
          ) : null}
          <Modal
            title={`What I learned from ${props.values.title}`}
            message={props.values.subtitle}
            values={props.values}
          />
          {props.values.githubRepo ? (
            <a href={props.values.githubRepo} className='btn btn-primary m-1'>
              GitHub Repo
            </a>
          ) : null}
          {props.values.images.length > 0 ? (
            <ImageModal
              title={`Images from ${props.values.title}`}
              values={props.values}
            />
          ) : null}
        </div>
      </Card>
    </Col>
  );
};

export default ProjectCard;
