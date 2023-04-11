import { Image, PockemonCart, Subtitle, Title } from '@/src/components/Home/home.style'
import React from 'react'

const Rendered = ({data}: any) => {
    return data?.pokemons?.map(({id, name, classification, image}: any) =>
        <PockemonCart key={id} >
            <Image src={image} alt="images"/>
            <Title>{name}</Title>
            <Subtitle>{classification}</Subtitle>
        </PockemonCart>
    )
}

export default Rendered;