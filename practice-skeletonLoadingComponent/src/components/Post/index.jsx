import React from 'react'

// our each individual post component that takes in post and user props
const Post = ({post, user}) => {
  return (
    // return an card that is styled in css and given all that data passed from props
    <article className='post'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      <p>Author: {user.name}</p>
      <p>Tagline: {user.company.catchPhrase}</p>
    </article>
  )
}

export default Post