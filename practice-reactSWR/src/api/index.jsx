// importing our axios
// this file will be updated from using axios to utilize our fetch api
// to using swr as our backend endpoint
import axios from "axios";

// Our crud operation 

const todosApi = axios.create({
    baseURL: "http://localhost:2500"
});

export const todosUrlEndpoint = '/todos';

export const getTodos = async() => {
    const response = await todosApi.get(todosUrlEndpoint)
    return response.data;
}

export const addTodo = async({ userId, title, completed}) => {
    const response = await todosApi.post(todosUrlEndpoint, {
        userId, title, completed});
    return response.data;
}

export const updateTodo = async (todo) => {
    const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo)
    return response.data
}

export const deleteTodo = async ({id}) => {
    return await todosApi.delete(`${todosUrlEndpoint}/${id}`, id);
}