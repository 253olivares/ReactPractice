import Skeleton from "..";
import React from 'react'

const SkeletonPost = () => {
  return (
    <div className="post">
        <Skeleton classes="title width-50"/>
        <Skeleton classes="title width-100"/>
        <Skeleton classes="title width-100"/>
        <Skeleton classes="title width-100"/>
    </div>
  )
}

export default SkeletonPost;