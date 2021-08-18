import React from 'react';

import bjorn_w224 from '../images/profilephoto_w224.jpg';
import bjorn_w500 from '../images/profilephoto_w500.jpg';
import bjorn_w500_webp from '../images/profilephoto_w500.webp';
import bjorn_w648 from '../images/profilephoto_w648.jpg';
import bjorn_w1024 from '../images/profilephoto_w1024.jpg';

import classes from './Picture.module.css';

const Picture = () => {
  return (
    <picture>
      <source
        srcSet={`${bjorn_w648} 1x, ${bjorn_w1024} 2x, ${bjorn_w1024} 3x`}
        media='(min-width: 400px)'
      ></source>
      <source srcSet={bjorn_w500_webp} type='image/webp'></source>
      <img
        src={bjorn_w224}
        className={`${classes.landing_img} card-img-top rounded-circle img-fluid`}
        srcSet={`${bjorn_w500} 2x, ${bjorn_w1024} 3x`}
        alt="Björn Tirsén's smiling face."
      ></img>
    </picture>
  );
};

export default Picture;
