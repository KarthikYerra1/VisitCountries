import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 30%;
  margin: 5px;
`

export const FlagImage = styled.img`
  width: 100%;
  height: 200px;
`
export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 15px;
  width: 100%;
  background-color: #1f1f2f;
  background-size: cover;
`
export const FlagName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
`

export const RemoveButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: transparent;
  border: solid 1px #f1f5f9;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  text-align: center;
  color: #f1f5f9;
`
