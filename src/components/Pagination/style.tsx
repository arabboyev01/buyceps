// @ts-ignore
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  width: 97%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 100px 30px 0;
  padding: 0 0 30px 0;
`

export const PaginateButton: any = styled.button`
  background: ${(props: any) => props.disabled ? "#333" : "#000"};
  color: ${(props: any) => props.disabled ? "#ccc" : "#fff"};
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`