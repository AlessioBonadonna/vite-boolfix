import { reactive } from 'vue'
export const store = reactive({
    urlbase: 'https://api.themoviedb.org/3',
    apiKey: '7e9f557263849965a8cdc7d05f7c373e',
    movies: [],
    tvShows: [],
    movieURL: "https://api.themoviedb.org/3/search/movie",
    imagesURL: "https://image.tmdb.org/t/p/w500/",
    tvURL: "https://api.themoviedb.org/3/search/tv",
    quary: 'harry',
    films: []
})
