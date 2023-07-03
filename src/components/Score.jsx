import React, { useRef } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore'
import { useNavigate } from 'react-router-dom';

const Score = ({time}) => {

  const navigate = useNavigate();

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100; 

  const messageRef = useRef();
  const ref = collection(firestore, 'record-data');

  const handleSave = async (e) => {
    e.preventDefault();
    
    let data = {
      name: messageRef.current.value,
      time: time
    }
    try {
      addDoc(ref, data);
    }
    catch {
      console.log(e);
    }
    navigate('/')
  }

  return (
    <div className='scoreDiv'>
      <div className='score'> 
        <div className='scoreTime'>
          Your time: {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </div>
        <form onSubmit={handleSave} className='scoreForm'>
          <label className='scoreName'>Your Name</label>
          <input className='scoreNameInput' type='text' ref={messageRef}/>
          <button className='scoreNameSubmit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Score;