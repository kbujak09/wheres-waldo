const Characters = ({level, remove, characters}) => {

  return (
    <div className='characters'>
      { characters.map((item) => {
        return <img className='character' alt={item.name} key={item.name} src={item.src}/>
      })}
    </div>
  )
}

export default Characters;