import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SitsLegend from "./SitsLegend";
import SessionInfo from "./SessionInfo";
import ClientInfo from "./ClientInfo"
import Sit from "./Sit";

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
    }, [params.sessaoId])

    return (
        <>
            <PageFunction><h3>Selecione o(s) assento(s)</h3></PageFunction>
            <Content>
                <SitsContainer>
                    {sits.map((sit) => <Sit name={sit.name} available={sit.isAvailable} id={sit.id} key={sit.id}/>)}
                </SitsContainer>
                <SitsLegend />
                <ClientInfo />
            </Content>
            <SessionInfo moviePoster={moviePoster} movieName={movieName} sessionDay={sessionDay} sessionTime={sessionTime} />
        </>
    )

}

const Content = styled.div`
    overflow-y: scroll;
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
const SitsContainer = styled.div`
    width: 100vw;
    display: flex;
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: space-between;
    flex-wrap: wrap;
`