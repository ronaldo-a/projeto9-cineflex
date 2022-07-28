import styled from "styled-components"

export default function Header() {
    return (
        <HeaderContainer>
            <Title>CINEFLEX</Title>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`

height: 67px;
width: 100vw;
position: fixed;
top: 0;
left: 0;

display: flex;
align-items: center;
justify-content: center;

background-color: #C3CFD9;
`

const Title = styled.h1`
    
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    color: #E8833A;
`