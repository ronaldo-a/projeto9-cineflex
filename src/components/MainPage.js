import axios from "axios"
import React, { useEffect } from "react"

export default function MainPage() {

    const [movies, setMovies] = React.useState([]) 
    
    useEffect(() => 
        {const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((data) => setMovies(data.data))}, 
        []
    )
    
    return (
        <div className="movies">
            {movies.map((movies, index) => <Movie title={movies.title} img={movies.posterURL} key={index}/>)}
        </div>
    )
}

function Movie(props) {
    return (
    <div className="movie">
        <h6>{props.title}</h6>
        <img src={props.img}/>
    </div>
    )
}