import './Films.scss';
import {FilmBox} from "./FilmBox";

type Props = {
    items: Array<{
        imgSrc: string,
    }>,
};

export const Films = ({ items }: Props) => {
    return (
        <div className="films-outer">
            <div className="films">
                {items.map((item) => <FilmBox {...item}/>)}
            </div>
        </div>
    );
};
