import './Header.scss';
import {useHistory} from "react-router-dom";
import {urls} from "@config/routes";

export const Header = () => {
    const history = useHistory();

    const handleBrand = (evt: any) => {
        evt.preventDefault();

        history.push(urls.FilmsFeed)
    }

    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-inner__logo-box">
                    <a href="#" className="header-inner__logo" onClick={handleBrand}>filmterest</a>
                </div>
                <form className="header-inner__search">
                    <div className="header-inner__search-box">
                        <button className="header-inner__button" type="submit">
                            <img src="search.svg" className="header-inner__button-img" alt=""/>
                        </button>
                        <input className="header-inner__input" type="text" id="search"/>
                    </div>
                </form>
            </div>
        </div>
    );
};
