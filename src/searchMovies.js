import "./index.css";
import {useState} from "react";
import MovieCard from "./movieCard";

export default function SearchMovies(){
    
    const [query, setQuery]= useState('');
    const [movies, setMovies]= useState([]);

    const searchMovies=async(e)=>{
        e.preventDefault();
        
        const url =`https://api.themoviedb.org/3/search/movie?api_key=8ecc45cf73e2ad17ef14065cbc4524b3&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
    }
    
    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label"> Movie Name</label>
            <input className="" name="query" type="text" className="query" placeholder="e.g. Mrs.Doubtfire" value={query} onChange={(e)=>setQuery(e.target.value)} />
            <button type="submit" className="button">Search</button>
        </form>

        <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie =>
                    <MovieCard movie={movie} key={movie.id}/>
                    )}
            </div>
        </>
    )
} 