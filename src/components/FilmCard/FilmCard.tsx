import './FilmCard.scss';
import React from 'react';
import { formatTime } from '@utils/formatTime';
import { useParams } from 'react-router-dom';
import { ajax } from "@utils/ajax";

export const FilmCard = (props: any) => {
    const {id} = useParams() as {id: string};

    const [content, setContent] = React.useState({
        data: {
            nameRu: '',
            posterUrl: '',
            year: '',
            filmLength: '',
            slogan: '',
            description: '',
            premiereWorld: '',
            countries: [
                {
                    country: '',
                }
            ],
            genres: [
                {
                    genre: '',
                }
            ]
        },
        rating: {
            rating: 0.0,
        },
        images: {
            backdrops: [
                {
                    url: '',
                }
            ]
        }
    });

    const [url, setUrl] = React.useState({
        "--url": "",
    });

    React.useEffect(() => {
        ajax(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`, {
            params: {
                append_to_response: 'POSTERS,RATING',
            },
            headers: {
                'X-API-KEY': 'ab632fee-9bd3-4904-8fdf-4589e142f107',
            }
        })
            .then(({data}) => {
                setContent(data);
                console.log(data);
                setUrl((url) => {
                    url["--url"] = `url(${content.images.backdrops[0].url})`;
                    return url;
                });

                console.log(url);
                // document.documentElement.style.setProperty('--url', `url(${content.images.backdrops[0].url})`);
            })
            .catch((err) => {
                console.log('Something bad happen while ajax');
            });
    }, []);

    return (
        // @ts-ignore
        <div className="film-card-outer" style={{...url}}>
            <div className="film-card">
                <div className="poster">
                    <img className="poster__img" src={content.data.posterUrl} alt=""/>
                </div>
                <div className="description">
                    <div className="description__base">
                        <div className="description__title">
                            <span>{content.data.nameRu} <span className="description__year">({content.data.year})</span></span>
                        </div>
                        <div className="description__facts">
                            <span className="description__date">{content.data.premiereWorld.split('-').slice().reverse().join('/')} ({content.data.countries[0].country})</span>
                            <span className="description__genres">{content.data.genres.map((g) => g.genre).join(', ')}</span>
                            <span className="description__duration">{formatTime(content.data.filmLength)}</span>
                        </div>
                    </div>
                    <div className="description__rating">
                        <span>Средняя оценка: </span>
                        <span className="description__rate">{content.rating.rating}</span>
                    </div>
                    <div className="description__quote">
                        <span>{content.data.slogan}</span>
                    </div>
                    <div className="description__overview">
                        <span className="description__overview-header">Обзор</span>
                        <span className="description__overview-content">{content.data.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};