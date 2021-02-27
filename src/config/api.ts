export const getImage = (img?: string) : string => img ? `https://image.tmdb.org/t/p/original${img}` : '';

const API_URL = 'https://api.themoviedb.org/3';

export const MOVIE = (id: number) => API_URL + `/movie/${id}`;

export const feedRequest = (page: number = 1) => API_URL + `/discover/movie?sort_by=popularity.desc&page=${page}`;

export const API_KEY = '2cd7d19b16a14e299e573cc9a8e0a135';

export const LANGUAGE = 'ru-RU';
