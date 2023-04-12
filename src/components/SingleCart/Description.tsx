import { Block, Measure, MeasureWeight, PokemonDescription } from '@/src/components/SingleCart/single.style'

const Description = ({weight, height}: any) => (
    <PokemonDescription>
        <Block>
            <MeasureWeight>Weight</MeasureWeight>
            <Measure>{weight.maximum}</Measure>
        </Block>
        <Block>
            <MeasureWeight>Height</MeasureWeight>
            <Measure>{height.maximum}</Measure>
        </Block>
    </PokemonDescription>
)

export default Description;