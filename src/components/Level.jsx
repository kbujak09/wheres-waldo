import { useState, useReducer, useEffect } from 'react';
import Dropdown from './Dropdown';
import { figures } from '../figures.js';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import Characters from './Characters';
import getData from '../firebase'
import Score from './Score';

const Level = ({image, level}) => {

  const [ isOver, setIsOver ] = useState(false);
  const [ timeScore, setTimeScore ] = useState(0);
  const [ characters, setCharacters ] = useState(figures[level]) 
  // eslint-disable-next-line no-unused-vars
  const [ ignored, forceUpdate ] = useReducer(x => x + 1, 0);
  const [ menu, setMenu ] = useState(0);
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0);

  const dropdown = (e) => {                           
    if (menu === 1) {
      setMenu(0);
    }
    else {
      setMenu(1);
      setX( e.clientX );
      setY( e.clientY + window.scrollY );
    }
  }

  const deleteCharacter = (name) => {
    const array = [];
    for (let item of characters) {
      array.push(item);
    }
    let found;
    for (let item of array) {
      if (item.name === name) {             
        found = array.indexOf(item);
      }
    }
    array.splice(found, 1);
    setCharacters(array);
    forceUpdate();
  }


  const isValid = (e) => {
    const image = document.querySelector('.levelImage');
    const x = e.clientX - image.offsetLeft;
    const y = e.clientY + window.scrollY;
    getData(e.target.innerText).then(data => {
      if (Math.abs(x - data.centerX) < data.radius && Math.abs(y - data.centerY) < data.radius) {
        deleteCharacter(e.target.innerText);
      }
    })
  } 

  const getTime = (time) => {
    setTimeScore(time);
  }

  useEffect(() => {
    if (characters.length === 0) {
      setIsOver(true);
      document.querySelector('body').style.overflow = 'hidden';
    }
})

  useEffect(() => {
    setCharacters(figures[level]);
    document.body.style.overflow = 'visible'
  }, [])

  return (
    <>
      <div className='nav'>
        <Link to='/wheres-waldo'><div>Home</div></Link>
        <Characters level={level} characters={characters} deleteCharacter={deleteCharacter}/>
        <Timer isOver={isOver} getTime={getTime}/>
      </div>
      <div className='levelContent'>
        <img className='levelImage' onClick={dropdown} src={image} alt='image01'/>
          { menu ? <Dropdown deleteCharacter={deleteCharacter} posX={ x } posY={ y } level={level} isValid={isValid} characters={characters} dropdown={dropdown} /> : null }
          { isOver ? <Score time={timeScore}/> : null } 
      </div>
    </>
  )
}

export default Level;