import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
    position: fixed;
    background-color: white;
    width: 100%;
`

export default function Header(){
    return(
        <HeaderStyle>
            <nav>
                <ul>
                   <li><a href="#main">Inicio</a></li>
                    <li><a href="#filmes">Filmes</a></li>
                    <li><a href='#series'>Series</a></li>
                    <li><a href='#footer'>Footer</a></li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}