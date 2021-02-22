import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb'; 
import MovieRow from './Components/MovieRow'; 


function App() {

  const [movieList, setMovieList] = useState([]); 

  useEffect(() => {
    const getHomeList = async () => {
      let list = await Tmdb.getHomeList(); 
      console.log(list);
      setMovieList(list);
    } 

    getHomeList(); 

  }, []); 

  return (
    <>
      <div className="page">
        <section className="lists">
          {movieList.map((item, index) => (
            <div>
              <MovieRow key={index} title={ item.title } items={ item.items }/>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
