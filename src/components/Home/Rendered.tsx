import {
    Image,
    PockemonCart,
    Subtitle,
    Title,
    Types,
    ImageWrapper,
    Number,
    Main, DetailedButton
} from '@/src/components/Home/home.style'
import React from 'react'
import { HomePageDataType, MainDataTypes } from '@/types'

const Rendered = ({data, handleRoutePage, indexOfFirstPost, indexOfLastPost}: HomePageDataType) => {
    return data?.pokemons?.slice(indexOfFirstPost, indexOfLastPost).map(({id, name, types, image, number}: MainDataTypes) =>
        <PockemonCart onClick={() => handleRoutePage(id, name)} key={id}>
            <ImageWrapper>
                <Image src={image} alt="images"/>
            </ImageWrapper>
            <Number>#{number}</Number>
             <Types>
                {types.map((type: string, index: number) =>
                    <Subtitle key={index}>{type}</Subtitle>
                )}
            </Types>
            <Main>
                <Title>{name}</Title>
                <DetailedButton onClick={() => handleRoutePage(id, name)}>Detail</DetailedButton>
            </Main>
        </PockemonCart>
    )
}

export default Rendered;