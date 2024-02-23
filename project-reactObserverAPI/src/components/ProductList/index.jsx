import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';

// Products list component where we will handle all out api requests and products. 
const ProductList = () => {

    // THis is our products state 
    // This is what well be using to hold all our products
    const [products, setProducts] = React.useState([]);

    // our hasMore state will control on if we want to render our observer div.
    // we will render it at the very bottom of our page at the end of all the products.
    // when it comes into view it will run our fetch function that will grab more items from the api and 
    // append it to the page
    const [hasMore, setHasMore] = React.useState(true);
    
    // our page state keeps track of how many items we want to skip. 
    // it will dynamically update everytime we load content. When we load content we add 1 to the page count. 
    // Each page will display 10 content so then we multiple it by the page count. 
    // we pass our result to our api to tell it how many items to skip before loading our new content.
    const [page,setPage] = React.useState(0);

    // we create a ref element that will be used to reference our observation div.
    // this is how our application will know to load more div.
    const elementRef = React.useRef(null);

    // this is a variable we are creating to abort our fetch function when our component unmounts
    // Realistically not incredibly useful here since we are not transfering large amounts of data but serves as a good practice
    // for larger applications where data needs to be cut from our application and closed bc a component un mounts
    let controller;

    // Create a controller to abort api fetch requests when we upload our component in the useEffect

    // this is our on intersection function that will run our fetch function when the application detects that our observation 
    // div has come into the view port
    async function onIntersection (entries) {
        // when our on intersection runs we call our objects our ref is bind to in this case it will only be that one div
        // so we will only have one object in our entries
        
        console.log("onIntersection: ",entries)
        // we create a variable that calls our entries that were passed from the intersection api
        const firstEntry = entries[0];
        // if our application is intersecting and our hasMore is true then we run our fetch items 
        if(firstEntry.isIntersecting && hasMore){
            // fetch our items
            await fetchMoreItems();
        }

    }
    // our useeffect that will run during the render of our app development lifecycle
    React.useEffect(()=> {
        // we create an observer that calls our intersection observer api
        // within the object we tell the api what function we want to run when our div is in view. 
        const observer = new IntersectionObserver(onIntersection);

        // using Abort controller to cut any connections ongoing in our application when our application unmounts 
        // this is done using our controller abort in our return for use effect
        controller = new AbortController();

        // if our observer is declared and we have a dom selected in our element ref that we run our observer
        if(observer && elementRef.current) {
            // tell our observer to observer our ref element. which in turn runs the on intersection function
            // when our dom element loads
            observer.observe(elementRef.current)
        }

        // clean up code for when our component mounts and unmounts
        return ()=> {
            // when our component unmounts we check to see if we have an observer
            if(observer) {
                // if sp we disconnect our observer
                observer.disconnect();
            }
            // if our controller exists
            if(controller) {
                // if we unmount our component any data running at the time with our controller signal will be cut off
                controller.abort();
            }
        }
        // we will run his use effect again every time when our products change so we 
        // create a new observer instance
        // we need to do this as our dom products are rerendering every time we add more data to it. 
    }, [products]);

    async function fetchMoreItems() {
        //fetch the new batch of products
        //api to use https://dummyjson.com/products

        // every time we run our fetchMoreItems function we run the following code to fetch data from our api
        try{
            // create a signal by calling our controller signal
            // this is how the controller api keeps track of which async functions are running
            const signal = controller.signal;
            // we run our fetch and pass our signal
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10}&delay=1000`,{signal})
            // we get our data by json parsing our data
            const data = await response.json();
            console.log(data);
            console.log(data.products);

            // if our data products length is 0 who data was returned
            // then we set our hasMore state to false
            if(data.products.length == 0) {
                setHasMore(false);
            }
            else {
                // if we do have products then we mutate our state to included the new data at the end
                setProducts(prevProducts => [...prevProducts,  ...data.products]);
                // we add 1 to our page so we can skip items that have already loaded
                setPage(prevPage => prevPage+1);
            }
            console.log("fetchMoreItems",products)
            console.log("fetchMoreItems",page)
        } catch (error) {
            // catch lets us know if we have any errors
        console.log("Fetch has run into some error:",error);
        } 
    }

  return (
    <React.Fragment>

        {
        // every time our states changes we render our products again and add new items 
        // we map through each item and display a card for that item with its specific information
            products.map(item=> (
                <Card key={item.id} style={{width:'600px', margin: '0 auto'}} className={'mb-2'}>
                    <Row>
                        <Col md={4}>
                            {/* select item thumbnail */}
                            <img src={item.thumbnail} alt='Product Image' style={{width:'100%', margin:'10px'}} />
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Text>
                                    {/* select item description */}
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    {/* select item price */}
                                    $ {item.price}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))
        }

        {
        
        hasMore && 
        // when we have elements to render we 
        // place this div at the end and tell our application to refrence it using element ref is what our observation api 
        // uses to know when we want to call in more data
            <div ref={elementRef} style={{textAlign:'center'}}> Load More Items...</div>
        }
    </React.Fragment>
  )
}

export default ProductList