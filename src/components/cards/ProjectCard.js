import React from 'react';

import { Col } from 'react-bootstrap';
import ImageModal from '../UI/ImageModal';

import Modal from '../UI/Modal';
import Card from './Card';

import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
  console.log('props.values: ', props.values);
  const { dateFirstCompleted, coverImage, subtitle, description, images } =
    props.values.content;
  const formattedDate = new Date(dateFirstCompleted).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Col>
      <Card className="h-100 d-flex flex-column">
        <div className={`${classes.header} text-center p-2`}>
          <p className={classes.date}>{formattedDate}</p>
          <img
            src={coverImage.filename}
            className="card-img-top"
            alt={coverImage.alt}
          />
          <h5 className="card-title text-uppercase font-monospace fw-bold pt-3">
            {props.values.name}
          </h5>
          <h6 className="card-title text-uppercase pb-3">{subtitle}</h6>
        </div>
        <div className="text-center p-2 flex-grow-1">
          <p className="">{description}</p>
        </div>
        <div className={`${classes.footer} text-center p-2`}>
          {props.values.siteLink ? (
            <a href={props.values.siteLink} className="btn btn-primary m-1">
              Link To Site
            </a>
          ) : null}
          <Modal
            title={`What I learned from ${props.values.title}`}
            message={props.values.subtitle}
            values={props.values}
          />
          {props.values.githubRepo ? (
            <a href={props.values.githubRepo} className="btn btn-primary m-1">
              GitHub Repo
            </a>
          ) : null}
          {images?.length > 0 ? (
            <ImageModal
              title={`Images from ${props.values.name}`}
              values={images}
            />
          ) : null}
        </div>
      </Card>
    </Col>
  );
};

export default ProjectCard;
