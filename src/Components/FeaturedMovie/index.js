import React from 'react';
import './featuredMovie.css';

const FeaturedMovie = ({ movie }) => {

    let firstDate = new Date(movie.first_air_date);
    let genres = [];

    for (let i in movie.genres) {
        genres.push(movie.genres[i].name);
    }

    return (
        <div className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}>
            <div className="featured--vertical">

                <div className="featured--hotizontal">
                    <h3 className="featured--name">{movie.original_name}</h3>
                    <div className="featured--info">
                        <div className="featured--points">{movie.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">
                            {movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <p className="featured--description">
                        {movie.overview}
                    </p>
                    <div className="featured--butons">
                        <a href="#" className="featured--watchbutton">Assitir</a>
                        <a href="#" className="featured--mylistbutton">+ Minha lista</a>
                    </div>
                    <div className="featured--genres">
                        Gêneros: {genres.join(', ')}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default FeaturedMovie;