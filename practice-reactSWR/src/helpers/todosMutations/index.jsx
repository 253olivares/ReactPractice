// all of our mutations that we create for our WSR.

// in each of our function we provide a param of our new code and then within the function we create an object
// this object controls how our data id displayed in the application
// Most of these are mostly settings un mutation.

// our optimistic Data defines the cache we will display while our data get validated.
// rollbackOnError defines if we want to return our code to its previous state if we encounter an error
// populate cache is where we define our new data if successful. In this case we are just returning the same data again.
    // Special Note: if we want to issue just true then we need our previous function to return the new data to be displayed (aka our external mutation: Since we are not doing this
    // for our example we are adding function that returns the new updated data for our populated cache)
    // when creating a function our option returns our mutation result which in this case is the new data and then a second param which we assign to be our
    // pre existing data
// revalidateCache tells swr if we want to run an api call to refetch our data. Since we are using optimistic ui we dont need to refetch our data

export const addTodoOptions = (newTodo) => {
    return {
        optimisticData: (todos) =>{

            return [...todos, newTodo].sort((a, b)=> b.id - a.id);
        },
        rollbackOnError: true,
        populateCache:(added,todos) => {

            return [...todos, added].sort((a, b)=> b.id - a.id);
        },
        revalidate:false,
    }
}

export const updateTodoOptions = (updatedTodo) => {
    return { 
        optimisticData: (todos) => {
            const prevTodo = todos.filter(todo=> {
                return todo.id != updatedTodo.id
            })

            return [...prevTodo, updatedTodo].sort((a, b)=> b.id - a.id);
        },
        rollbackOnError: true,
        populateCache: (updated, todos) => {
            const prevTodos = todos.filter(todo=> {
                return todo.id !== updatedTodo.id
            })

            return [...prevTodos, updated].sort((a, b)=> b.id - a.id)
        },
        revalidate: false
    }
}

export const deleteTodoOptions = ({id}) => {
    return {
        optimisticData: (s) => {

            return s.filter(todo => {
                return todo.id !== id
            })
        },
        rollbackOnError: true,
        populateCache: (emptyResponseObj, todos) => {

            return todos.filter(todo => {
                return todo.id !== id
            })
            
        },
        revalidate: false,
    }
}
