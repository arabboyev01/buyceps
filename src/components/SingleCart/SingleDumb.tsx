import {
    SingleContent,
    ImageContent,
    Image,
    Description,
    Name,
    Classification,
    Number
} from '@/src/components/SingleCart/single.style'
import PokemonDescription from "./Description"

const SingleDumb = ({data}: any) => (
    <SingleContent>
        <ImageContent>
            <Image src={data.image} alt={data.name} />
        </ImageContent>
        <Description>
            <Name>{data.name}</Name>
            <Number>#{data.number}</Number>
            <Classification>{data.classification}</Classification>
            <PokemonDescription weight={data.weight} height={data.height}/>
        </Description>
    </SingleContent>
)

export default SingleDumb;