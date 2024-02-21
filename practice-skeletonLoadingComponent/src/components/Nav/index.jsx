import useSWR from "swr"

import {
    getUsers,
    usersUrlEndpoint as usersCacheKey
} from './../../api/UsersApi'

// Our nav component that utilizes swr with our axios api to gather and make data requests.

// nav takes in our currentUserId, and Set props
const Nav = ({currentUserId, setCurrentUserId}) => {

    // outSWR cook creates is Loading and Error Const based on data its getting
    // for example further down whe we begin to return our data swr will tell our component to render isloading while its fetching data
    // after which it will render error if swr runs into an error fetching data. 
    // Otherwise if successful we return our data from get users and store our data in as employees. 
    const {
        isLoading,
        error,
        data: employees,
    } = useSWR(usersCacheKey, getUsers)

    // we create an options variable that we will set with different render depending on what swr returns
    let options

    if(isLoading) {
        // while swr is loading we display Loading... in place of options
        options = <option>Loading...</option>
    } else if (!error) {
        // Otherwise after loading is finished and we dont have an error then we map our data employees and create an array of options
        // this block of code is stored in options and well use later on. 
        options = employees.map (user => {
            return (
                // each options is pushed into our variable with a unique key that we create by putting opt and then our user id we are
                // currently on
                // we give our options a value of the user id
                <option
                key={`opt${user.id}`}
                value={user.id}
                >
                    {/* then display our name. */}
                    {user.name}
                </option>
            )
        })
        // After our map we create a singular option element that is used to store 0 for when we dont want a user selects
        const titleValue = <option key="opt0" value={0} >Employees</option>

        // this element is pushed onto the very end.
        options.push(titleValue);
    }

    // our on change function that runs when our select input detects change. When it does it uses our setters to set a new target value
    // which is selected
    const onChangeUser = (e) => setCurrentUserId(e.target.value)

    // create a new variable that will dynamically change based on swr results
    let content

    // id our swr returned a error earlier then we set the error message as its content
    if(error){
        content = <p>{error.message}</p>
    } else {
        // otherwise if not then our content will be our select element that houses our options variable which we should of figured 
        // in our if else statement above
        content = (
            <select 
            // set a name of selectMenu
            name="selectMenu"
            // id
            id="selectMenu"
            // class
            className="selectMenu"
            // our selected value will be whatever is set in our currentUserId State
            value={currentUserId}
            aria-label="Employee Name"
            // on change function that sets our user id state when we change our select
            onChange={onChangeUser}
            >
                {/* our options variable houses all our select elements  */}
                {options}
            </select>
        )
    }

    // return content that will then display our select element with its options that was dynamically set up by returning an object with all our users from our json server
  return content
}

export default Nav