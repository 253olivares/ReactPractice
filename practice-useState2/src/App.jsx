import React from "react"

// Our goal form function that will handle taking our input fields and then placing them in our list goals
// using our function we passed down as a prop
function GoalForm(props) {
  // FormData state that we will be using to keep track opf user input by binding our formDate.goal and formData.by to their respective fields.
  const [formData, setFormData] = React.useState({goal: "", by: ""});
  // function that sets our formData whenever our dom detects an input change
  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  // Function submitHandler that triggers when the user wants to enter their goal and resolution date
  function submitHandler(e){
    // e prevent to keep our page from reloading
    e.preventDefault();
    // Our prop function we passed on to let our data be passed onto the component that makes changes to our state
    // That afterwards is then carried back down to its respective child dom
    props.onAdd(formData);
    setFormData({goal: "",by: ""});
  }
  
  return(
    <React.Fragment>
      <h1>My Short Term Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </React.Fragment>
  )
}

// function component to list our goals
// We pass our state list as a prop and then return a li lists that loops through our props and displays them using the map function
function ListOfGoals(props) {
  console.log(props);
  return (
    <ul>
      {props.allGoals.map((g)=> 
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      )}
    </ul>
  )
}

// Our main react component app that we are calling in main jsx to display our application

function App() {

  // Creating a all goals states that we will pass down to our list of goals components.
  // our component will update whenever a new goal is added and that update will pass down to its child component
  const [allGoals, updateAllGoals] =  React.useState([]);

  // this is how we would update our state in a child state
  // pass it down as a prop using a function in this case add goal
  function addGoal(goal) {
    console.log(goal);
    updateAllGoals([...allGoals,goal]);
  }


  return (
    <React.Fragment>
      {/* Goal Form and passing our function on add that will trigger our update all goals
      This is how we normally would trigger set states */}
      <GoalForm onAdd={addGoal} />
      {/* lists of goals component passing our goal states */}
      <ListOfGoals allGoals={allGoals} />
    </React.Fragment>
  )
}

export default App
