import React from "react"
import styled from "styled-components"

export const FooterStyle = styled.footer`
    background-color: yellow;
    height: 30vh;

`
export const H2 = styled.h2`
    font-size: 3rem;
`
export default function Footer (){
    return(
        <FooterStyle id="footer">
            <H2>
                    Eu sou o Footer
            </H2>
        </FooterStyle>
    )
}