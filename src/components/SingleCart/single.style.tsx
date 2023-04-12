// @ts-ignore
import styled from 'styled-components'

export const SinglePage = styled.div`
  max-width: 1000px;
  margin: 100px auto 150px auto;
`

export const SingleContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 100px;
  @media(max-width: 650px){
    flex-direction: column;
  }
`

export const ImageContent = styled.div`
  width: 450px;
  height: 450px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    width: 300px;
    height: 300px;
  }
`

export const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: contain;
   @media (max-width: 650px) {
    width: 250px;
    height: 250px;
  }
`

export const Number = styled.p`
  margin-top: 5px;
  font-size: 22px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
`

export const Description = styled.div`

`
export const Name = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
`

export const Classification = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 3px;
`

export const PokemonDescription = styled.div`
  max-width: 400px;
  height: 100px;
  background: #0D98BA;
  margin-top: 40px;
  border-radius: 8px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-row-gap: 30px;
   @media (max-width: 650px) {
    width: 300px;
  }
`

export const Measure = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 5px;
  color: #fff;
`
export const MeasureWeight = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #000;
`

export const Block = styled.div`
  
`

export const MainTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: #000;
  margin-top: 20px;
`

export const AddInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-row-gap: 10px;
  margin-top: 20px;
`
export const SomeInfo = styled.div`
  width: 80px;
  height: 30px;
  background: #000;
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

