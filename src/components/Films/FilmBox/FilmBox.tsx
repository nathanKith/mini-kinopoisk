import './FilmBox.scss';

type Props = {
    src: string,
    onClick: (evt: any) => void,
};

export const FilmBox = ({onClick, src}: Props) => {
    return (
        <div className="film-box" onClick={onClick}>
            <img src={src} className="film-box__img" alt=""/>
        </div>
    );
};
