# React High Order Component

Often time in react there is a need to cut reuse code for performance and readability. Sometimes there will be repeat components that use the same states and functions with the only difference being data source and and data itself.

HOCs allow us to create a function that creates new components based on previous preexisting components. THe idea being dynamic components that allow us to change data states functions and sources through props.

ex:

$ const Component = (wrappedComponent, data) => {
$ return(props)=> {
$ const [data, setData] = useState([]);
$
$ useEffect(()=> {
$ const handleChange = () => {
$ const newData = data(DataSource, props);
$ setData(newData);
$ }
$ DataSource.addListener(handleChange);
$ return () => {
$ DataSource.removeListener(handleChange);
$ }
$ }, []);
$ return <WrappedComponent data={data} {...props} />
$ }

}
