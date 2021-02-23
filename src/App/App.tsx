import React from 'react';
import './App.scss';
import {Header} from '../components/Header';
import {Films} from "../components/Films";

const f = {
    "adult":false,
    "backdrop_path":"/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg",
    "belongs_to_collection":null,
    "budget":0,
    "genres":[{"id":18,"name":"драма"},{"id":80,"name":"криминал"},{"id":35,"name":"комедия"}],
    "homepage":"",
    "id":2,
    "imdb_id":"tt0094675",
    "original_language":"fi",
    "original_title":"Ariel",
    "overview":"С героем фильма шахтером Таисто случается серия неудач…", // описание фильма или же обзор
    "popularity":10.764,
    "poster_path":"/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg",
    "production_companies":[{"id":2303,"logo_path":null,"name":"Villealfa Filmproductions","origin_country":"FI"}],
    "production_countries":[{"iso_3166_1":"FI","name":"Finland"}],
    "release_date":"1988-10-21",
    "revenue":0,
    "runtime":73,
    "spoken_languages":[{"english_name":"German","iso_639_1":"de","name":"Deutsch"},{"english_name":"Finnish","iso_639_1":"fi","name":"suomi"}],
    "status":"Released",
    "tagline":"С героем фильма шахтером Таисто случается серия неудач…", // цитата
    "title":"Ариэль",
    "video":false,
    "vote_average":6.8,
    "vote_count":125
}

function App() {
    return (
        <div className="app">
            <Header/>
            <Films items={[{imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
                {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
                {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},{imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
                {imgSrc: 'starwar.jpg'},
                {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
                {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},]}/>
        </div>
    );
}

export default App;
