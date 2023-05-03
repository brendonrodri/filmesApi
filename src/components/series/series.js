import React from "react"
import styled from "styled-components"

export const SerieStyle = styled.main`
    background-color: greenyellow;
    height: 50vh;
`
export const H2 = styled.h2`
    font-size: 3rem;
`

export default function Series (){
    return(
        <SerieStyle id="series">
            <H2>Componente de Series</H2>
        </SerieStyle>
    )
}