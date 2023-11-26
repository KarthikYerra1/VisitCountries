import {
  ListItem,
  FlagImage,
  CountryDetailsContainer,
  FlagName,
  RemoveButton,
} from './styledComponents'

const VisitedCountryItem = props => {
  const {details, clickedRemoveButton} = props
  const {id, name, imageUrl} = details

  const onClickRemove = () => {
    clickedRemoveButton(id)
  }

  return (
    <ListItem>
      <FlagImage alt="thumbnail" src={imageUrl} />
      <CountryDetailsContainer>
        <FlagName>{name}</FlagName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </CountryDetailsContainer>
    </ListItem>
  )
}

export default VisitedCountryItem
