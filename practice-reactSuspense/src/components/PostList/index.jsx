import React from 'react'
import useSWR from 'swr'

// this is our post list component list here we take our user id state that is returned from our parent component the request specific data
// that is tied to that id

// importing our getPostByUserId from post api file
// postsUrlEndpoint is going to be our key for swr
import {
  getPostsByUserId,
  postsUrlEndpoint as postsCacheKey
} from '../../api/PostsApi'


import {
    getUsersById,
    usersUrlEndpoint as usersCacheKey
} from '../../api/UsersApi'

import Post from '../Post';

const PostList = ({currentUserId}) => {

  // we can get rid of isloading and error now since we are relying on react 
  // suspense and error boundaries to handle our loading and errors
  const {
    data:posts
  } = useSWR(
    [postsCacheKey, currentUserId],
    ([url,userId]) => getPostsByUserId(url,userId),
    // enable suspense in swr
    { suspense: true }
  )

  const {
    data:user
  } = useSWR(
   
    posts?.length ? [usersCacheKey, currentUserId] : null,
    ([url,userId]) => getUsersById(url,userId),
    // enable suspense in swr
    { suspense: true }
  )

  // We will only be on this page if we have our content data so we dont need to worry
  // about a long turnery checking the state of swr
  const content = (
      <main>
        {
          posts.map(post => {
            // set key as post id | post is post data | user is userData
            return <Post key={post.id} post={post} user={user}/>
          })
        }
      </main>
    )
    
    // display our content

  return content
}

export default PostList