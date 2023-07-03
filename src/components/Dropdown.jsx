const Dropdown = ({posX, posY, characters, dropdown, level, deleteCharacter, isValid}) => {
  return (
    <div className='menu' style={{ top: posY + 10, left: posX + 10 }}>{characters.map((person) => {
      return <button className='wanted' onClick={(e) => { dropdown(); isValid(e);}} key={person.name}>{person.name}</button>
    })}</div>
  )
}

export default Dropdown;