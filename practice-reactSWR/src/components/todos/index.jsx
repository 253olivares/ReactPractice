import toast, {Toaster} from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// swr
import useSWR from 'swr';
// importing our api keys from our api file
import {
    addTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    todosUrlEndpoint as cacheKey,
} from '../../api';

import {
    addTodoOptions,
    updateTodoOptions,
    deleteTodoOptions
} from '../../helpers/todosMutations'

const TodoList =() => {

    // create a state that tracks our new todo
    const [newTodo, setNewTodo] = React.useState('');

    // initiate our useWSR hooks
    const {
        isLoading,
        error,
        data: todos,
        mutate,
    } = useSWR(cacheKey, getTodos, {
        onSuccess: data => data.sort((a, b) => b.id - a.id)
    }) ;
    // onsuccess is run every time mutate is called

    // addTodo Mutation function that takes in our new todo and runs our add todo function that appends it to our json server
    const addTodoMutation = async (newTodo) => {
        try {
            // mutate tells swr that our previous data is invalid and we need to revalidate again
                // This is only when mutation is called by itself()
            // With this set up we are passing a function to validate data as our first object and then our second object is a function that changes
            // our mutation settings we want to utilize
            await mutate(
                addTodo(newTodo),
                // mutate options passing data 
                addTodoOptions(newTodo),
            )
            // API and Mutation Here
            
            // toaster notification gives us a success message if we dont encounter any issues
            toast.success("Success! Added new item.",{
                duration:1000,
                icon: '🎉'
            })
        } catch (err) {
            // if we encounter an error we run a toaster notification with the following error message
            toast.error("Failed to add the new item.", {
                duration:1000
            })
        }
    }

    // update todo mutation function that takes in our updated todo which is planned to just replace our todo data 
    const updateTodoMutation = async (updatedTodo)=> {
        try{
            // we call our update todo function and passing our param of the new updated todo
            await mutate(
                updateTodo(updatedTodo),
                updateTodoOptions(updatedTodo),
            )
            // API & Mutation Here

            // success message
            toast.success("success! Updated the item.", {
                duration:1000,
            })
        }catch (err) {
            // error message
            toast.error("Failed to update the item.", {
                duration:1000,
            })
        }
    }

    // delete todo mutation function that takes in id object 
    const deleteTodoMutation = async ({id}) => {
        try {
            // delete todo function that we are calling from our api file
            
            await mutate(
                deleteTodo({id}),
                deleteTodoOptions({id}),
            )
            
            // success toaster notification
            toast.error("Success! Deleted item.",{
                duration:1000,
            })
        }catch (err) {
            // Failure toaster notification
            toast.error("Failed to delete the item.", {
                duration:1000,
            })
        }
    }
    
    // function that runs when we submit our addTodo form we call our event in params so that we can prevent submission
    const handleSubmit = (e)=> {
        e.preventDefault();
        // after which we trim the state to make sure its not empty string to prevent submission if we are given an empty string
        if(newTodo.trim()) {
            // if we have a state we extract state as our title and set a false completion passing a default userId of 1
            addTodoMutation({userId:1, title:newTodo, completed:false, id:9999});
            // set todo state to blank again to clear our input
            setNewTodo('');
        } else {
            // if blank provide a error toasted notification 
            toast.error("Failed to add the new item.", {
                duration:1000
            })
        }
    }

    // create new const new item section
    // This is a variable that will hold our submission form
    const newItemSection = (
        // render a form that runs hanfleSubmit function when we click our submit button
        <form onSubmit={handleSubmit}>
            {/* Label */}
            <label htmlFor="new-todo">Enter a new todo item</label>
            {/* our div with our new todo input */}
            <div className='new-todo'>
                {/* no input where we set a value of our state and then run an onchange function that whenever the input field detects 
                change it sets the todo state to the input box value */}
                <input 
                type="text" 
                id='new-todo'
                value={newTodo}
                onChange={(e)=> setNewTodo(e.target.value)}
                placeholder='Enter new todo'
                />
            </div>
            {/* submit button */}
            <button className='submit'>
                {/* Upload icon */}
                <FontAwesomeIcon icon={faUpload}/>
            </button>
        </form>
    )

    // create a variable for content
    let content;
    
    // this set up is for our swr hook when data is loading through our hook we will display a loading message if the data fails
    // we load a error message into our content variable
    // once our data is complete we load a article element that has a loop of all our todos into the application. 
    // Each todo is filled with the respective todo completed value
    // respective id for the id its looping 
    // and a function that has the new values for our mutation so when change our checkbox it will fun the function to update the value on the server

    if(isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>{error.message}</p>
    } else  {
        
          content = todos.map((todo)  => {
            return (
                <article key={todo.id}>
                    <div className='todo'>
                        <input 
                        type="checkbox"
                        checked={todo.completed}
                        id={todo.id}
                        onChange={()=> 
                            updateTodoMutation({ ...todo, completed: !todo.completed })
                        } 
                        />
                        {/* our label that shows our title */}
                        <label htmlFor={todo.id}>{todo.title}</label>
                    </div>
                    {/* a button the far right that runs delete mutation by passing the appropriate id */}
                    <button className='trash' onClick={()=> deleteTodoMutation({id: todo.id})}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </article>
            )
        })
    }
    return (
        <main>
            {/* toaster component we set its position so the application knows where to display its toaster */}
            <Toaster toastOptions={{position:"top-center"}} />
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
} 

export default TodoList;