import './index.css';
import React from 'react'

// out skeleton component takes in those classes and then pushes those classes to the div that creates the skeleton look we want using css
const Skeleton = ({classes}) => {

    // set up our classes that we are going to assign to our skeleton
    const classNames = `skeleton ${classes} animate-pulse` ;
    // these css classes can be found in index css where we set widths and heights 

    // this is what is usually returned whenever we create a skeleton
  return <div className={classNames}></div>
}

export default Skeleton