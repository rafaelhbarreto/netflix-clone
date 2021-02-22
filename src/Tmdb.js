/**
 * Arquivo de configuração e dados da API do Tmdb
 */

const API_KEY = '9e45867a6a5b31e63c07219095fec594';
const API_BASE = 'https://api.themoviedb.org/3'; 

/**
 * 
 * Originais da Netflix 
 * recomendados (trending)
 * em alta (top rated)
 * ação
 * comédia
 * terror
 * romance
 * documentários
 * 
 */

 /**
  * make the request in the API 
  * 
  * @param {string} path 
  */
const basicFetch = async (endpoint) => {
    const res = await fetch(`${API_BASE}${endpoint}`);
    const json = res.json(); 

    return json; 
}

export default {

    getHomeList: async () => { 
        return [ 
            {
                slug: "originals",
                title: "Originais Netflix",
                items: await basicFetch(`/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];
    }    
}
