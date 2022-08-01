import { useState } from "react"
import styled from "styled-components"


export default function Sit(props) {

    const [available, setAvailable] = useState(props.available)
    const [selected, setSelected] = useState("")

    return (
        <SitContainer onClick={() => pickSeat(available, setSelected, props.selecteds, props.key1, props.id, props.sels)} available={available} selected={selected}>
               <p>{props.name}</p> 
        </SitContainer>
    )
}

function pickSeat(available, setSelected, selecteds, id, id1, sels) {
    if (available === true) {
            id = parseInt(id)
            if (selecteds.includes(id)) {
                setSelected("")
                let index = selecteds.indexOf(id)
                selecteds.splice(index, 1)
                let index1 = sels.indexOf(id1)
                sels.splice(index1, 1)
            } else {
                setSelected("selected")
                selecteds.push(id)
                sels.push(id1)
            }
    } else {
        alert("Assento não disponível")
    }
}

const SitContainer = styled.div`
    width: 9%;
    height: 26px;
    background-color: ${props => 
    {if (props.available === true && props.selected !== "") { return "#8DD7CF"}
     else if (props.available === false) { return "#FBE192"}
    else {return "#C3CFD9"}}
     };
    border-radius: 12px;
    margin-bottom: 26px;

    border: 1px solid ${props => {if (props.available === true && props.selected !== "") { return "#1AAE9E"}
     else if (props.available === false) { return "#F7C52B"}
    else {return "#7B8B99"}}
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