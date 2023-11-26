import {
  ListItem,
  CountryName,
  VisitedCountry,
  VisitButton,
} from './styledComponents'

const CountryItem = props => {
  const {details, clickedVisitButton} = props
  const {id, name, isVisited} = details

  const onClickVisit = () => {
    clickedVisitButton(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedCountry>Visited</VisitedCountry>
      ) : (
        <VisitButton type="button" onClick={onClickVisit}>
          Visit
        </VisitButton>
      )}
    </ListItem>
  )
}

export default CountryItem
