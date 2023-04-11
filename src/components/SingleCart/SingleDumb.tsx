import { SingleContent, ImageContent, Image, Description, Name, Classification } from '@/src/components/SingleCart/single.style'

const SingleDumb = ({data}: any) => (
    <SingleContent>
        <ImageContent>
            <Image src={data.image} alt={data.name} />
        </ImageContent>
        <Description>
            <Name>{data.name}</Name>
            <Classification>{data.classification}</Classification>
        </Description>
    </SingleContent>
)

export default SingleDumb