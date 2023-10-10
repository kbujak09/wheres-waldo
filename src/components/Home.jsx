import { Link } from 'react-router-dom';
import level01 from '../images/level01.webp';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className='nav'>
        <div className='title'>Where's Waldo</div>
        <Link to='/leaderboard' className='leaderboardLink'>leaderboard</Link>
      </div>
      <div className='levels'>
        <Link to='/level01'><div className='levelLink' id='level01'><img className='preview' src={level01} alt='level01'/></div></Link>
      </div>
      <Footer />
    </>
  )
}

export default Home;