import React from 'react'
import styled from 'styled-components'

export const HeaderStyle = styled.header`
    position: fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(15px);
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:10vh;
    
    nav{
       width:60%;
    }
    ul{
        display:flex;
        justify-content:space-between;
        list-style:none;
    }

    a{
        text-decoration:none;
        color:white;
        font-size:1.2rem;
    }
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