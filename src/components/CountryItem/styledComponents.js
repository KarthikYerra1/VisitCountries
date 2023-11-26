import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border: solid 1px #334155;
  font-family: 'Roboto';
`

export const CountryName = styled.p`
  font-size: 14px;
  color: #f8fafc;
  font-family: 'Roboto';
`
export const VisitedCountry = styled.p`
  color: #94a3b8;
  font-size: 14px;
  padding-right: 10px;
`
export const VisitButton = styled.button`
  color: #fff;
  background-color: #3b82f6;
  text-align: center;
  height: 30px;
  width: 60px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
`
