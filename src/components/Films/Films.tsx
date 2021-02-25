import * as React from 'react';
import './Films.scss';
import {FilmBox} from './FilmBox';
import {ajax} from '@utils/ajax';
import EndlessScroll from 'react-endless-scroll';
import {useHistory} from 'react-router-dom';
import {urls} from "@config/routes";

export const Films = () => {
    const [dataFilms, setDataFilms] = React.useState({
        films: [{posterUrl: '', filmId: 0},],
        pageCount: 1,
    });

    const history = useHistory();

    const [page, setPage] = React.useState(1);

    const handleScroll = () => {
        setPage((p) => p + 1);
    };

    React.useEffect(() => {
        ajax('https://kinopoiskapiunofficial.tech/api/v2.1/films/top', {
            params: {
                page: page,
                type: 'TOP_250_BEST_FILMS',
            },
            headers: {
                'X-API-KEY': 'ab632fee-9bd3-4904-8fdf-4589e142f107',
            }
        })
            .then((response) => {
                setDataFilms((data) => {
                    data.films.push(...response.data.films);
                    return data;
                })
                if (page === 1) {
                    setDataFilms((data) => {
                        data.films = data.films.slice(1);
                        return data;
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [page]);

    return (
        <EndlessScroll hasMore={true} isLoading={false} onReachBottom={handleScroll} className="films-outer">
            {dataFilms.films.map((item) => <FilmBox onClick={(evt: any) => {history.push(urls.FilmCard.create(item.filmId))}} src={item.posterUrl} key={item.filmId}/>)}
        </EndlessScroll>
    );
};
