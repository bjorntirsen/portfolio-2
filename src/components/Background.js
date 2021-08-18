import React from 'react';

import classes from './Background.module.css';

const Background = (props) => {
  let styling;
  if (props.forPage === 'Landing') {
    styling = classes.background_landing;
  } else styling = classes.background_projects;

  return (
    <div className={`${classes.background} ${styling} ${classes.zoom}`}>
      {props.children}
    </div>
  );
};

export default Background;
