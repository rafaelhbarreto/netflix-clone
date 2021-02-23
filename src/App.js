import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header'; 
import Footer from './Components/Footer'; 

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false); 

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 0) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []); 

  return (
    <>
      <div className="page">

        <Header black={blackHeader}/>

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

        <Footer />

      </div>
    </>
  );
}

export default App;
