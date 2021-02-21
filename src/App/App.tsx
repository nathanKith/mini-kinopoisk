import React from 'react';
import './App.scss';
import {Header} from '../components/Header';
import {Films} from "../components/Films";

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main">
          <Films items={[{imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
              {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
              {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},{imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
              {imgSrc: 'starwar.jpg'},
              {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},
              {imgSrc: 'starwar.jpg'}, {imgSrc: 'starwar.jpg'},]}/>
      </div>
    </div>
  );
}

export default App;
