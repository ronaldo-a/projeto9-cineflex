import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function ClientInfo(props) {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [CPF, setCPF] = useState("")

    function sucess (e) {

        e.preventDefault()

        let orderPost = {ids: props.selecteds, name: name, cpf: CPF}
        let orderComplete = {ids: props.sels, name: name, cpf: CPF, movie: props.movieName, day: props.sessionDay, time: props.sessionTime}
        
        let promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", orderPost)

        promise.then((res) => navigate("/sucesso", {state: orderComplete}))
    }

    return (
        <InputsContainer>
            <form onSubmit={sucess}>
                <label for="name">Nome do Comprador</label>
                <input type="text" id="name" placeholder="Digite seu nome..." onChange={e => setName(e.target.value)} required/>
                <label for="CPF">CPF do comprador</label>
                <input type="number" id="CPF" placeholder="Digite seu CPF..." onChange={e => setCPF(e.target.value)} required/>
                <button>Reservar assento(s)</button>
            </form>
        </InputsContainer>
    )
}



const InputsContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin-top: 38px;
    margin-bottom: 117px;
    margin-left: auto;
    margin-right: auto;

    label {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        height: 51px;
        margin-bottom: 7px;
    }

    button {
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border-radius: 3px;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`