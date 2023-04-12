import { AddInfo, SomeInfo } from '@/src/components/SingleCart/single.style'

const BlockType = ({data}: any) => (
    <AddInfo>
        {data.map((item: any, index: number) =>
            <SomeInfo key={index}>{item}</SomeInfo>
        )}
    </AddInfo>
)
export default BlockType