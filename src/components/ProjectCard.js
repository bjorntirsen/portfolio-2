import React from 'react';

import { Card, Col } from 'react-bootstrap';

import WhatILearnedModal from './WhatILearnedModal';
import Modal from './../components/UI/Modal';

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
      <Card className='h-100 bg-light'>
        <Card.Header className='text-center'>{formattedDate}</Card.Header>
        <img
          src={props.values.imageCoverUrl}
          className='card-img-top'
          alt={props.values.title}
        />
        <Card.Body className={`text-center ${classes.bg_lighter}`}>
          <h5 className='card-title text-uppercase font-monospace fw-bold'>
            {props.values.title}
          </h5>
          <h6 className='card-title text-uppercase'>{props.values.subtitle}</h6>
          <p className='card-text '>{props.values.description}</p>
        </Card.Body>
        <Card.Footer className='text-center'>
          <a href={props.values.siteLink} className='btn btn-primary m-1'>
            Link To Site
          </a>
          <WhatILearnedModal values={props.values} />
          <Modal
            title={`What I learned from ${props.values.title}`}
            message={props.values.subtitle}
            values={props.values}
          />
          <a href={props.values.githubRepo} className='btn btn-primary m-1'>
            GitHub Repo
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectCard;
