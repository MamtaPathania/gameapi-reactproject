import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from './store/Slice';
import Header from './Header';
import GameCarousel from './GameCarousel';
import { Link } from 'react-router-dom'; 
import spinner from '../../src/assets/images/spinner.gif'
function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state)
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (state.game.isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <img
          className="min-w-full min-h-full object-fill"
          alt="background"
          src={spinner}
        />
      </div>
    );
  } 
  return (
    <div>
      <Header category={state.game.data.category}/>
      <GameCarousel games={state.game.data.games} />
      <div className='bg-black'>
      <h1 className='text-2xl text-white text-center font-mono font-bold'>ALL GAMES</h1>
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 bg-black lg:p-6 md:p-5 sm:p-4 p-3'>
        {state.game.data && state.game.data.games ? (
          state.game.data.games.map((game) => (
        <Link to={`/games/${game.gameid}`} key={game.gameid}>
 <div className="relative">
  <img
    className="rounded-lg object-fill h-40 w-40 sm:h-58 sm:w-58 md:h-64 md:w-64 lg:h-70 lg:w-70 border border-white overflow-hidden hover:scale-105 mx-auto"
    src={game.imgurlnew}
    alt={game.gamename}
  />
  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    <button className="bg-yellow-400 text-white px-2 py-1 rounded-lg font-semibold">Play Now</button>
  </div>
  <h2 className="text-center text-white font-serif">{game.gamename}</h2>
  <h3 className="text-center text-white font-serif">{game.category}</h3>
  </div>
   </Link>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
