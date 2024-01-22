import Card from './compontents/Card'

// import image from our assets
import profilePic from './assets/qy9jtg8emz7a1.jpg'

// Function based components
function App() {
  // In order to return multiple components we need to wrap them in a react fragment
  return (
    <React.Fragment>
      <Card 
      profilePic={profilePic} 
      profilePicAlt={'Profile Icon'} 
      cardTitle="Miguel Olivares" 
      cardContent="I like to code and play games"
      ></Card>
      <Card 
      profilePic={profilePic} 
      profilePicAlt={'Profile Icon2'} 
      cardTitle="Miguel Olivares Second Card" 
      cardContent="I like to code and play games x2"
      ></Card>
    </React.Fragment>
  );
}

export default App
