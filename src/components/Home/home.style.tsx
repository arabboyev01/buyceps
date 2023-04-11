// @ts-ignore
import styled from 'styled-components'

export const HomeComponent = styled.div`
  max-width: 1020px;
  margin: 50px auto;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-row-gap: 30px;
`
export const PockemonCart = styled.div`
  max-width: 220px;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: .3s ease-in-out;
  background: #fff;

  &:hover {
    transform: scale(1.02);
    box-shadow: 1px 1px 6px 0.5px rgba(0, 0, 0, 0.1);
  }
`
export const Title = styled.h1`
  font-size: 22px;
  margin: 18px 0;
  font-weight: 700;
  color: #000;
`
export const Types = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
`

export const Subtitle = styled.p`
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  background: #333;
  color: aliceblue;
  width: 85px;
  text-align: center;
`
export const ImageWrapper = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`
export const Number = styled.p`
  margin-top: 5px;
  font-size: 22px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
`

export const LoadMore = styled.button`
  background: #000;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 20px 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000;
    background: #fff;
  }
`
