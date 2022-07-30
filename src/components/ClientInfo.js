import styled from "styled-components"

export default function ClientInfo() {
    return (
        <InputsContainer>
            <label for="name">Nome do Comprador</label>
            <input type="text" id="name" />
            <label for="CPF">CPF do comprador</label>
            <input type="number" />
            <button type="submit">Reservar assento(s)</button>
        </InputsContainer>
    )
}

const InputsContainer = styled.form`
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