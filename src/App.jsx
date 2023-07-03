import Home from './components/Home';
import Level from './components/Level';
import { HashRouter, Routes, Route } from 'react-router-dom';
import level01 from './images/level01.webp';
import Leaderboard from './components/Leaderboard';

const App = () => {

  return (
    <div className='App'> 
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route element={<Level level='0' image={level01}/>} path='/level01'/>
          <Route path='/leaderboard' element={<Leaderboard />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
