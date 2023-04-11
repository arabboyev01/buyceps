import { Image, PockemonCart, Subtitle, Title, Types, ImageWrapper } from '@/src/components/Home/home.style'
import React from 'react'

const Rendered = ({data}: any) => {
    return data?.pokemons?.map(({id, name, types, image}: any) =>
        <PockemonCart key={id}>
            <ImageWrapper>
                <Image src={image} alt="images"/>
            </ImageWrapper>
            <Title>{name}</Title>
            <Types>
                {types.map((type: string, index: number) =>
                    <Subtitle key={index}>{type}</Subtitle>
                )}
            </Types>
        </PockemonCart>
    )
}

export default Rendered;