import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderLogoBox">
            </div>
            <div className="HeaderElseBox">
                <span className="HeaderElseBoxItem">О проекте</span>
                <span className="HeaderElseBoxItem">FAQ</span>
                <button className="HeaderElseBoxButton">
                    <a href="#" className="HeaderElseBoxButtonLink">Личный кабинет</a>
                </button>
            </div>
        </div>
    );
};

export default Header;
