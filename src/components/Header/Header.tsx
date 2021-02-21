import './Header.scss';

export const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-inner__logo-box">
                    <a href="#" className="header-inner__logo">filmterest</a>
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
