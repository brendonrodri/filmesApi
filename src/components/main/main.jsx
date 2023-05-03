import React from "react"
import styled from "styled-components"

export const MainStyle = styled.main`
    background-color: blue;
    height: 50vh;
`
export const H2 = styled.h2`
    font-size: 3rem;
`

export default function Main (){
    return(
        <>
            <MainStyle id="main">
                <H2>
                Componente de Main
                </H2>
            </MainStyle>
        </>
    )
}