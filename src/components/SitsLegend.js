import styled from "styled-components"

export default function SitsLegend() {
    return (
        <SitsLegendContainer>
                <Legend>
                    <SitSelected> </SitSelected>
                    <p>Selecionado</p>
                </Legend>
                <Legend>
                    <SitAvailable> </SitAvailable>
                    <p>Disponível</p>
                </Legend>
                <Legend>
                    <SitUnavailable> </SitUnavailable>
                    <p>Indisponível</p>
                </Legend>
        </SitsLegendContainer>
    )
}

const SitsLegendContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

`

const Legend = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
    }
`

const SitSelected = styled.div`
     width: 26px;
    height: 26px;
    background-color: #8DD7CF;
    border-radius: 12px;
    margin-bottom: 10px;

    border: 1px solid #1AAE9E;

    display: flex;
    align-items: center;
    justify-content: center;
`

const SitAvailable = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border-radius: 12px;
    margin-bottom: 10px;

    border: 1px solid #7B8B99;

    display: flex;
    align-items: center;
    justify-content: center;
`

const SitUnavailable = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border-radius: 12px;
    margin-bottom: 10px;

    border: 1px solid #F7C52B;

    display: flex;
    align-items: center;
    justify-content: center;
`