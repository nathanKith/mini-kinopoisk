export type FilmType = {
    adult: boolean,
    backdrop_path?: string,
    belongs_to_collection: null | object,
    budget: number,
    genres: Array<Genre>,
    homepage?: string,
    id: number,
    imdb_id?: string,
    original_language: string,
    original_title: string,
    overview?: string, // описание фильма или же обзор
    popularity: number,
    poster_path?: string,
    production_companies: Array<Companies>,
    production_countries: Array<Countries>,
    release_date: string,
    revenue: number,
    runtime?: number,
    spoken_languages: Array<Languages>,
    status: string,
    tagline?: string, // цитата
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
};

type Genre = {
    id: number,
    name: string,
};

type Companies = {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
}

type Countries = {
    iso_3166_1: string,
    name: string,
}

type Languages = {
    iso_639_1: string,
    name: string,
}