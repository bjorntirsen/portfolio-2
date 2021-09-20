import React from 'react';

import classes from './WhatILearnedSection.module.css';

const WhatILearnedSection = (props) => {
  return (
    <>
      <div className='align-items-center d-flex'>
        {props.values.icons.map((icon, index) => {
          if (icon.startsWith('fa')) {
            return (
              <i
                className={`fa-3x ${icon} m-1`}
                title={icon}
                key={props.parentKey + index}
              ></i>
            );
          } else {
            return (
              <span
                className={`${classes.emoji} m-1`}
                key={props.parentKey + index}
              >
                {icon}
              </span>
            );
          }
        })}
      </div>
      <p className='text-center'>{props.values.paragraph}</p>
    </>
  );
};

export default WhatILearnedSection;
