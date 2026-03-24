import { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css';

function Home(){

    const [searchQuery , setSearchQuery] = useState("");
    const movies = [
        {id : 1, title : "Perks of being a wallflower", release_date: "2013"},
        {id : 2, title : "Terminator", release_date: "1987"},
        {id : 3, title : "Dune", release_date: "2018"},
    ];

const handleSeach = (e) =>{
    e.preventDefualt();
    alert(searchQuery);
    setSearchQuery("-------")
};

    return(
        <div className="home">
            <form onSubmit= {handleSeach} className = "search-form">
                <input type="text"
                  placeholder="Seach for movies.."
                  className="sesrch-input"
                  value = {searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <button type = "submit" className = "search-button">Search</button>


            <div className="movie-grid">
                {movies.map((movie) =>(
                   movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie = {movie} key = {movie.id}/>
                   ) 
                ))}
            </div>
        </div>
    )
}

export default Home;