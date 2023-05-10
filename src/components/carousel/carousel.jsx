import React, { useEffect, useState } from "react"
import Carousel, { consts } from 'react-elastic-carousel'
import axios from "axios"
import styled from "styled-components"

const ContainerCarousel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #272626;

`
const CarouselTitle = styled.h2`
    color: #f2f2f2;

`

export default function CarouselComponent() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        getFilmes()
    }, [])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                }
            })
            setFilmes(allApi)

        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }

    return (
        <ContainerCarousel >
            <CarouselTitle>Filmes</CarouselTitle>
            <Carousel
                itemsToScroll={3}
                itemsToShow={5}
                /* enableAutoPlay autoPlaySpeed={2000} */
                itemPadding={[30, 30]}
            /* itemPosition={consts.END} */
            >

                {filmes.map((item) => (
                    <div>
                        <img src={item.image} style={{ width: '90%' }} />
                        <CarouselTitle>{item.title}</CarouselTitle>
                    </div>
                ))}

            </Carousel>
        </ContainerCarousel>

    )
}