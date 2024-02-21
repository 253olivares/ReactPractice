import React from 'react'
import axios from 'axios';
// post api file

// delay function that creates a time out so we can see the in between for our app
const delay = () => new Promise ((res) => setTimeout(()=> res(), 1800));

// creates axios instance for our post api
const postsApi = axios.create({
    baseURL: "http://localhost:3500",
})

// export for postUrlEndpoint "/posts"
export const postsUrlEndpoint = '/posts';

// export getPostsByUserID that takes in a url and id
export const getPostsByUserId = async (url, userId) => {
    await delay();
    // sends a get request that tells the api to get any posts that match the id in the usersid if it has it.
    const response = await postsApi.get(`${url}?userId=${userId}`)
    return response.data;
}