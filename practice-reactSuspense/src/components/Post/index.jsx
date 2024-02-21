import React from 'react'

const Post = ({post, user}) => {
  return (
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