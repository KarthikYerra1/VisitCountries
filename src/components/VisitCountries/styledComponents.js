import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px;
  background-color: #161624;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const Headings = styled.h1`
  font-size: 20px;
  color: #f8fafc;
  font-weight: 500;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  border-radius: 5px;
  border: solid 1px #334155;
`
export const CountriesNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
`

export const VisitedCountriesContainer = styled(CountriesListContainer)`
  flex-direction: row;
  border: none;
  border-radius: none;
  flex-wrap: wrap;
  overflow: none;
`
export const NoCountriesTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const NoCountriesText = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  color: #f8fafc;
`
