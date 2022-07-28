import axios from "axios"
import {useState, useEffect} from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function MainPage() {

    const [movies, setMovies] = useState([]) 
    
    useEffect(() => 
        {const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((data) => setMovies(data.data))}, 
        []
    )
    
    return (
        <>
        <PageFunction><h3>Selecione o filme</h3></PageFunction>
        <Movies>
            {movies.map((movie, index) => <Movie img={movie.posterURL} id={movie.id} key={index}/>)}
        </Movies>
        </>
    )
}

// UI/UX
function Movie(props) {
    return (
        <Link to={`/sessoes/:${props.id}`}>
            <MovieCard>
                <img src={props.img} alt={props.title}/>
            </MovieCard>  
        </Link>  
    )
}


//STYLED COMPONENTS

const Movies = styled.div`
    width: 100vw;
    background-color: #FFFFFF;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const PageFunction = styled.div`
    height: 110px;
    width: 100vw;
    margin-top: 67px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
    }
`

const MovieCard = styled.div`
    width: 145px;
    height: 209px;
    border-radius: 3px;
    margin-bottom: 19px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 129px;
        height: 193px;
    }
 
`