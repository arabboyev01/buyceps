// @ts-ignore
import styled from 'styled-components'

export const HomeComponent = styled.div`
  max-width: 1220px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: center;
`
export const PockemonCart = styled.div`
  max-width: 250px;
  height: auto;
`
export const Title = styled.h1`
  font-size: 18px;
  margin: 18px 0;
  font-weight: 700;
  color: darkorange;
`
export const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 16px;
`
export const ImageWrapper = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`
