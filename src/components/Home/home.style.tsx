// @ts-ignore
import styled from 'styled-components'

export const HomeComponent = styled.div`
  max-width: 1220px;
  margin: 50px auto;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`
export const PockemonCart = styled.div`
  max-width: 340px;
  height: auto;
`
export const Title = styled.h1`
  font-size: 18px;
  margin: 18px 0;
  font-weight: 700;
  color: darkorange;
`

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 16px;
`
export const Image = styled.img`
  max-width: 350px;
`