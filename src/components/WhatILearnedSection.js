import React from 'react';

import classes from './WhatILearnedModal.module.css';


const WhatILearnedSection = (props) => {
  return (
    <>
      <div class='align-items-center d-flex'>
        {props.values.icons.map((icon) => {
          if (icon.startsWith('fa')) {
            return <i class={`fa-3x ${icon} m-1`} title={icon}></i>;
          } else {
            return <span class={`${classes.emoji} m-1`}>{icon}</span>;
          }
        })}
      </div>
      <p class='text-center'>{props.values.paragraph}</p>
    </>
  );
};

export default WhatILearnedSection;
