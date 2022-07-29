import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SitsLegend from "./SitsLegend";

export default function SessionSits() {

    const params = useParams()
    const [sits, setSits] = useState([])
    const [movieName, setMovieName] = useState("")
    const [moviePoster, setMoviePoster] = useState("")
    const [sessionDay, setSessionDay] = useState("")
    const [sessionTime, setSessionTime] = useState("")

    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.sessaoId}/seats`);
        promise.then((promise) => {
            setSits(promise.data.seats)
            setMovieName(promise.data.movie.title)
            setMoviePoster(promise.data.movie.posterURL)
            setSessionDay(promise.data.day.weekday)
            setSessionTime(promise.data.name)   
        })
    }, [])

    return (
        <>
            <PageFunction><h3>Selecione o(s) assento(s)</h3></PageFunction>
            <SitsContainer>
                {sits.map((sit) => <Sit name={sit.name} available={sit.isAvailable} key={sit.id}/>)}
            </SitsContainer>
            <SitsLegend />
            <SessionInfo>
                <MovieCard>
                    <img src={moviePoster} alt={movieName}/>
                </MovieCard>  
                <MovieInfo>
                    <h3>{movieName}</h3>
                    <h3>{sessionDay} - {sessionTime}</h3>
                </MovieInfo>
            </SessionInfo>
        </>
    )

}


function Sit(props) {

    let color = "#C3CFD9"

    //(props.available) ? (setColor="#C3CFD9", setBack="#808F9D") : (color="#FBE192", setBack="#F7C52B")

    return (
        <SitContainer color={color}>
            <p>{props.name}</p> 
        </SitContainer>
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
const SitsContainer = styled.div`
    width: 100vw;
    display: flex;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: space-between;
    flex-wrap: wrap;



`

const SitContainer = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.color};
    border-radius: 12px;
    margin-bottom: 26px;

    border: 1px solid ${props => props.color};

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
`

const SessionInfo = styled.div`
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

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`