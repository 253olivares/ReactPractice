import React from 'react';
import './App.css'
import Hello from './component/Hello';
import Heading from './component/Heading';
import { Section } from './component/Section';
import Counter from './component/Counter';
import List from './component/List';


const App: React.FC = () => {
  const [count,setCount] = React.useState<number>(0)

  return(
    <div className='App'>
      {/* <Hello 
      name='David'
      enthusiasmLevel={3}
       /> */}
       <Heading />
       <Section title={"Different Title"}>This is my Section.</Section>
       <Counter setCount={setCount}>Count is {count}</Counter>
       <List items={["Coffee", "Tacos", "Code"]} render={(item:string)=> <span className='gold'>{item}</span>}/>
    </div>
  )
}

export default App
