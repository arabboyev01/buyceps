import {
    SingleContent,
    ImageContent,
    Image,
    Description,
    Name,
    Classification,
    Number, MainTitle
} from '@/src/components/SingleCart/single.style'
import PokemonDescription from './Description'
import BlockType from '@/src/components/SingleCart/BlockType'

const SingleDumb = ({data}: any) => (

    <SingleContent>
        <ImageContent>
            <Image src={data.image} alt={data.name}/>
        </ImageContent>
        <Description>
            <Name>{data.name}</Name>
            <Number>#{data.number}</Number>
            <Classification>{data.classification}</Classification>
            <PokemonDescription weight={data.weight} height={data.height}/>
            <MainTitle>Types</MainTitle>
            <BlockType data={data.types}/>
        </Description>
    </SingleContent>
)

export default SingleDumb;