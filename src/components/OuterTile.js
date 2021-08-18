import React from 'react';

import classes from './OuterTile.module.css';

const OuterTile = (props) => {
  let styling
  if (props.forPage === 'Landing') {
    styling = `align-items-center d-flex ${classes.landing_outer_tile}`
  } else styling = `${classes.outer_tile}`
  
  return (
    <div className={styling}>
      {props.children}
    </div>
  );
};

export default OuterTile;
