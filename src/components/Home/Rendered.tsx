import { Image, PockemonCart, Subtitle, Title, Types, ImageWrapper, Number } from '@/src/components/Home/home.style'
import React from 'react'
import { MainDataTypes } from '@/types'

const Rendered = ({data}: any) => {
    return data?.pokemons?.map(({id, name, types, image, number}: MainDataTypes) =>
        <PockemonCart key={id}>
            <ImageWrapper>
                <Image src={image} alt="images"/>
            </ImageWrapper>
            <Number>#{number}</Number>
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