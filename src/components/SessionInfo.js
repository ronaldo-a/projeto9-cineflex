import styled from "styled-components"

export default function SessionInfo(props) {
    return (
        <SessionInfoContainer>
            <MovieCard>
                <img src={props.moviePoster} alt={props.movieName}/>
            </MovieCard>  
            <MovieInfo>
                <h3>{props.movieName}</h3>
                <h3>{props.sessionDay} - {props.sessionTime}</h3>
            </MovieInfo>
        </SessionInfoContainer>
    )
    
}

const SessionInfoContainer = styled.div`
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