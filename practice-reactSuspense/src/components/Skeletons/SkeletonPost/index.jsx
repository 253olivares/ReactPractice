import Skeleton from "..";
import React from 'react'

// this is our main skeleton card component
const SkeletonPost = () => {
  return (
    // this is our card div
    <div className="post">
        {/* These are the individual skeletons that we see loaded when the app is waiting for data*/}
        {/* each time we call it we pass the class we want each skeleton to display as  */}
        <Skeleton classes="title width-50"/>
        <Skeleton classes="title width-100"/>
        <Skeleton classes="title width-100"/>
        <Skeleton classes="title width-100"/>
    </div>
  )
}

export default SkeletonPost;