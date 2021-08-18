import React from 'react'

import classes from './Background.module.css'

const Background = (props) => {
  return (
    <div className={`${classes.background} ${classes.zoom}`}>
      {props.children}
    </div>
  )
}

export default Background
