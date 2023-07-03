import Home from './components/Home';
import Level from './components/Level';
import { Routes, Route } from 'react-router-dom';
import level01 from './images/level01.webp';
import { useState } from 'react';
import Leaderboard from './components/Leaderboard';

const App = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<Level open={open} setOpen={setOpen} level='0' image={level01}/>} path='/level01'/>
        <Route path='/leaderboard' element={<Leaderboard />}/>
      </Routes>
    </div>
  );
}

export default App;
