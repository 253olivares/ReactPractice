import List from './component/List'
// import our list component
function App() {
  // Create an array with our fruit objects
  const fruits = [{id: 1,name: "apple",calories: 95},
                  {id: 2,name: "orange",calories: 45},
                  {id: 3,name: "coconut",calories: 159},
                  {id: 5,name: "pineapple",calories: 37}];
// Create an array with out veggies objects
  const vegetables = [{id: 6,name: "potatoes",calories: 100},
                  {id: 7,name: "celery",calories: 25},
                  {id: 8,name: "carrots",calories: 63},
                  {id: 9,name: "corn",calories: 50}];


  return (
    <>
    {/* turnery that checks to make sure our array length is larger then 0 if true then we pass our array into the component 
    otherwise display nothing */}
      {fruits.length>0 && <List items={fruits} category="Fruits"></List> }
      {vegetables.length>0 && <List items={vegetables} category="Vegetables"></List> }
    </>
  );
}

export default App
