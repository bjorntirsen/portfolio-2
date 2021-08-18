import React from 'react';

import classes from './OuterTile.module.css';

const OuterTile = (props) => {
  return (
    <div className={`align-items-center d-flex ${classes.landing_outer_tile}`}>
      {props.children}
    </div>
  );
};

export default OuterTile;
