import './FilmBox.scss';

type Props = {
    imgSrc: string,
}

export const FilmBox = ({ imgSrc }: Props) => {
    return (
        <div className="film-box">
            <img src={imgSrc} className="film-box__img" alt=""/>
        </div>
    );
};
