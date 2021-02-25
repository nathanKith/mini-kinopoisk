import React from 'react';
import './App.scss';
import {Header} from '../components/Header';
import {Films} from '../components/Films';
import {FilmCard} from "@components/FilmCard";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {urls} from '@config/routes';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Switch>
                    <Route
                        path={urls.FilmCard.url}
                        render={(props) => <FilmCard {...props}/>}
                    />
                    <Route path={urls.FilmsFeed}>
                        <Films/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
