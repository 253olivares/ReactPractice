import React from "react"

function GoalForm(props) {
  
  const [formData, setFormData] = React.useState({goal: "", by: ""});

  function changeHandler(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  function submitHandler(e){
    e.preventDefault();
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


function App() {

  const [allGoals, updateAllGoals] =  React.useState([]);

  // this is how we would update our state in a child state
  // pass it down as a prop using a function in this case add goal
  function addGoal(goal) {
    console.log(goal);
    updateAllGoals([...allGoals,goal]);
  }


  return (
    <React.Fragment>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </React.Fragment>
  )
}

export default App
