import React from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import './App.css';

// Movie App

// API Key  6d1dd6a2

const API_URL = 'http://www.omdbapi.com?apikey=6d1dd6a2';

const movie1  = {
    "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
    "Year": "2007",
    "imdbID": "tt1132238",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}

const App = () =>{

    const [movies,setMovies] = React.useState();

    const [searchTerm, setSearchTerm] = React.useState("");

    // At the start of app load we are going to fetch our movies

    const searchMovies = async (title) => {
        // Call our API
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }
    
    React.useEffect(()=>{
        searchMovies('Spiderman')
    },[])

    return(
        <React.Fragment>
            <div className="app">
                <h1>MovieLand</h1>

                <div className="search">
                    <input 
                    type="text" 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    />
                    <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={()=> searchMovies(searchTerm)}
                    />
                </div>
                
                {
                    movies?.length > 0 
                    ? (
                        <div className="container">
                            {movies.map((movie,index)=> <MovieCard movie1 = {movie} key={index} /> )}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default App;