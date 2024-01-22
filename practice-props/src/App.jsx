// Components imported
import Students from "./compontents/Students"

function App() {
  return(
    // React fragment
    <React.Fragment>
      {/* Student component */}
    <Students name="Spongebob" age="30" isStudent={true}></Students>
    <Students name="Patrick" age={42} isStudent={false}></Students>
    <Students name="Squidward" age={50} isStudent={false}></Students>
    <Students name="Sandy" age={35} isStudent={true}></Students>
    <Students></Students>
    </React.Fragment>
  );
}

export default App
