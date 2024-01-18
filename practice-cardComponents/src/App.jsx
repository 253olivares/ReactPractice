import Card from './compontents/Card'

import profilePic from './assets/qy9jtg8emz7a1.jpg'

function App() {
  return (
    <>
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
    </>
  );
}

export default App
