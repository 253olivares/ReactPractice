import './index.css';
import React from 'react'

const Skeleton = ({classes}) => {

    // set up our classes that we are going to assign to our skeleton
    const classNames = `skeleton ${classes} animate-pulse` ;

  return <div className={classNames}></div>
}

export default Skeleton