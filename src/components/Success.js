import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Success() {

    const location = useLocation()
    const navigate = useNavigate()
    

    return (
        <>
            <Header>Pedido feito com sucesso!</Header>
            <Part>
                <h6>Filme e sessão</h6>
                <p>{location.state.movie}</p>
                <p>{location.state.day} {location.state.time}</p>
            </Part>
            <Part>
                <h6>Ingressos</h6>
                {location.state.ids.map((id) => <p>Assento {id}</p>)}
            </Part>
            <Part>
                <h6>Comprador</h6>
                <p>{location.state.name}</p>
                <p>{location.state.cpf}</p>
            </Part>
            <Button onClick={() => navigate("/")}>
                Voltar pra Home
            </Button>
        </>
        
    )
}

const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #247A6B;
    text-align: center;

    margin-top: 134px;
`

const Part = styled.div`
    margin-top: 60px;
    margin-left: 29px;

    h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: #293845;

        margin-bottom: 10px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;

    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    margin-top: 75px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: center;
`