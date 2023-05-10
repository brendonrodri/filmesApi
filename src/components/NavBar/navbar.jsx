import React from "react"
import * as S from "./style"

export default function NavComponent(){
    return (
        <S.NavBar>
            <S.NavList>
                <S.NavItem>Comédia</S.NavItem>
                <S.NavItem>Drama</S.NavItem>
                <S.NavItem>Aventura</S.NavItem>
                <S.NavItem>Terror</S.NavItem>
                <S.NavItem>Ação</S.NavItem>
            </S.NavList>
            <SearchBar />
        </S.NavBar>
    )
}

const  SearchBar = () =>{
    return <S.InputSearch />
}