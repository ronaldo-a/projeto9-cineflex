import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

export default function MovieSessions() {
    
    const params = useParams()
    const [sessions, setSessions] = useState([])
    const [movieName, setMovieName] = useState("")
    const [moviePoster, setMoviePoster] = useState("")

    useEffect(() =>
    {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.filmeId}/showtimes`);
        promise.then((promise) => {
            setSessions(promise.data.days);
            setMovieName(promise.data.title);
            setMoviePoster(promise.data.posterURL)    
        })
    }, [params.filmeId])

    return(
        <>
            <PageFunction><h3>Selecione o horário</h3></PageFunction>
            <SessionsContainer>
                {sessions.map((sessions, index) => <SessionsDay weekday={sessions.weekday} date={sessions.date} showtime={sessions.showtimes} key={index}/>)}
            </SessionsContainer>
            <MovieInfo>
                <MovieCard>
                    <img src={moviePoster} alt={movieName}/>
                </MovieCard>  
                <h3>{movieName}</h3>
            </MovieInfo>
        </>
    )
}

function SessionsDay(props) {
    return (
        <DaySessions>
            <Day>{`${props.weekday} - ${props.date}`}</Day>
            <Times>
                {props.showtime.map((showtime) => <Time hora={showtime.name} id={showtime.id} key={showtime.id}/>)}
            </Times>
        </DaySessions>
    )
}

function Time(props) {
    return (
        <Link to={`/assentos/${props.id}`}>
            <Hora>{props.hora}</Hora>
        </Link>
    )
}



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
const SessionsContainer = styled.div`
    width: 100vw;
    margin-left: 23px;

    display: flex;
    flex-direction: column;
    align-items: left;

    overflow-y: scroll;
`
const DaySessions = styled.div`
    margin-bottom: 23px;
`
const Day = styled.div`
    font-family:'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #293845;

    margin-bottom: 22px;
`
const Times = styled.div`
   display: flex;
`
const Hora = styled.div`
    width: 83px;
    height: 43px;
    border-radius: 3px;
    margin-right: 9px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #E8833A;

    font-family:'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
`
const MovieInfo = styled.div`
    width: 100vw;
    min-height : 117px;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;

    background-color: #9EADBA;

    h3 {
        font-family:'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        flex-wrap: wrap;
    }
`
const MovieCard = styled.div`
    width: 64px;
    height: 89px;
    border-radius: 2px;
    margin-right: 14px;
    margin-left: 10px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
    }
 
`