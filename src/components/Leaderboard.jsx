import { getRecords } from '../firebase';
import Record from './Record';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {

  const [ data, setData ] = useState([]) 

  const getData = async() => {
    const records = await getRecords(); 
    records.sort((a,b) => b.time-a.time); 
    return setData(records);
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className='leaderboard'>
     <div className='leaderboardTitle'>Leaderboard</div>
     <div className='leaderboardContent'>{data.map(record => {
      return <Record time={record.time} name={record.name}/>
     })}</div>  
     <Link to='/wheres-waldo' className='leaderboardBack'>{'<'}</Link> 
    </div>
  )
}

export default Leaderboard;