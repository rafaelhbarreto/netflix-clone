import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const getHomeList = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((item) => item.slug === 'originals');
      let originalsItems = originals[0].items.results;
      let randomChosenPosition = Math.floor(Math.random() * (originalsItems.length - 1));
      let chosen = originalsItems[randomChosenPosition];
      setFeaturedMovie(await Tmdb.getChosenInfo(chosen.id, 'tv'));
    }

    getHomeList();

  }, []);

  return (
    <>
      <div className="page">

        {featuredMovie &&
          <FeaturedMovie movie={featuredMovie} />
        }

        <section className="lists">
          {movieList.map((item, index) => (
            <div>
              <MovieRow key={index} title={item.title} items={item.items} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
