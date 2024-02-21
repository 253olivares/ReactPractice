import axios from "axios";

// This is our user api file.  

// creates a function that delays our function for a set time
// we create this function so we can see the changes in between to trouble shoot for this application
const delay = () => new Promise ((res)=> setTimeout(()=> res(), 1800));

// creates axios instance
const usersApi = axios.create({
    baseURL:"http://localhost:3500"
})

// this is our end point we want to target
export const usersUrlEndpoint = '/users'

// export a function called getUsers
// our function runs our axios instance and then runs our get function that tells our api to retrieve information from our server
export const getUsers = async () => {
    await delay();
    // return our response
    const response = await usersApi.get(usersUrlEndpoint);
    // extract the data and return the data
    return response.data;
};

// get users by id
// same as our get users only difference is that were taking a url and userId for this function
// for code reduction concerns we could hard code our url but by taking in a url we can make it dynamic to be used elsewhere.

export const getUsersById = async(url, userId) => {
    await delay();
    // axios targets http://localhost:3500/url/id
    const response = await usersApi.get(`${url}/${userId}`)
    //return our data
    return response.data;
}