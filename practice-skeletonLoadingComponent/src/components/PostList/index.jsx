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
import SkeletonPost from '../Skeletons/SkeletonPost'

const PostList = ({currentUserId}) => {

  // for this module we will have two different SWR hooks running 
  // for out first hook we create a isloading var and error var depending on what we get back based on our get posts by user id
  // our returns are returned and set as posts for our data.

  // our swr hook takes our our cache key from above which is ['/posts', and our id ]
  // by default it will be ['/posts',0]
  const {
    isLoading,
    error,
    data:posts
  } = useSWR(
    [postsCacheKey, currentUserId],
    // pass our postsCacheKey and user is as url and userID and then run our function passing those params
    ([url,userId]) => getPostsByUserId(url,userId)
  )

  // second hook
  // we create a loading varr that we listen for below but ths time we called it isLoadingUser 
  // same with error we just call ie userError and we listen for these variables
  // we set our data return as user
  const {
    isLoading: isLoadingUser,
    error: userError,
    data:user
  } = useSWR(
    // for this hook we check to see if we have any posts. If not posts are found then we prevent the swr request from running
    // if it does run then we pass our key and id 
    // we return the user info from which we have selected
    posts?.length ? [usersCacheKey, currentUserId] : null,
    ([url,userId]) => getUsersById(url,userId)
  )

  // after our swr hooks we ove on to setting our hook which will display for the component
    let content
    if(currentUserId === 0) {
      // if our id is 0 then we display select an employee to the user
      content = <p className='loading'>Select an Employee to view posts</p>
    } else if  (isLoading || isLoadingUser) {
      // if our content is loading then we set our skeleton from which this app was created to study
      content = (
        // to display more than one skeleton component without repeating the code 10 times we create a 10 index array set keys and then 
        // map through that array io display 10 skeleton component cards
        [...Array(10).keys()].map(i=> {
          return <SkeletonPost key={i}/>
        })
      )
    } else if (error || userError) {
      // otherwise if we run into any errors then we display the error in our content
      content = <p>{error.message || userError.message}</p>
    } else {
      // otherwise if we don't run into any issues we take our post data and then loop through and display our post component with 
      // each individual post data we pass throughl
      // in addition to the post data we pass our user data as well
      content = (
        <main>
          {
            posts.map(post => {
              // set key as post id | post is post data | user is userData
              return <Post key={post.id} post={post} user={user}/>
            })
          }
        </main>
      )
    }
    
    // display our content

  return content
}

export default PostList