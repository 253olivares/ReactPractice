import UserGreeting from "./components/UserGreeting";
// component
function App() {
  return(
    <>
    {/* Our user greeting component to show case conditional rendering. Our component will
    render 2 different results depending if we pass true or false */}
      <UserGreeting 
      isLoggedIn={true} 
      
      ></UserGreeting>
    </>
  );
}

export default App
