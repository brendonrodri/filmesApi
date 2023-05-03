import React from "react"
import styled from "styled-components"

export const FilmesStyle = styled.section`
    background-color: red;
    height: 50vh;

`
export const H2 = styled.h2`
    font-size: 3rem;

`


export default function Filmes (){
    return(
        <FilmesStyle id="filmes">
            <H2>Componente de filmes</H2>
        </FilmesStyle>
    )
}