import { useState } from "react"
import styled from "styled-components"


export default function Sit(props) {

    const [available, setAvailable] = useState(props.available)
    const [selected, setSelected] = useState("")

    return (
        <SitContainer onClick={() => pickSeat(available, setSelected, props.selecteds, props.id)} available={available} selected={selected}>
               <p>{props.name}</p> 
        </SitContainer>
    )
}

function pickSeat(available, setSelected, selecteds, id) {
    console.log(id)
    if (available === true) {
            id = parseInt(id)
            if (selecteds.includes(id)) {
                setSelected("")
                let index = selecteds.indexOf(id)
                selecteds.splice(index, 1)
            } else {
                setSelected("selected")
                selecteds.push(id)
            }
    } else {
        alert("Assento não disponível")
    }
    console.log(selecteds)
}

const SitContainer = styled.div`
    width: 9%;
    height: 26px;
    background-color: ${props => 
    {if (props.available === true && props.selected !== "") { return "#C3CFD9"}
     else if (props.available === false) { return "#FBE192"}
    else {return "#8DD7CF"}}
     };
    border-radius: 12px;
    margin-bottom: 26px;

    border: 1px solid ${props => {if (props.available === true && props.selected !== "") { return "#808F9D"}
     else if (props.available === false) { return "#F7C52B"}
    else {return "#1AAE9E"}}
     };

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
`