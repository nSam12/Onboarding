import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="Header">
            <div className="HeaderLogoBox">
            </div>
            <div className="HeaderElseBox">
                <span>О проекте</span>
                <span>FAQ</span>
                <button className="HeaderElseBoxButton">
                    <a href="#" className="HeaderElseBoxButtonLink" onClick={()=>{navigate("/personaloffice")}}> Личный кабинет</a>
                </button>
            </div>
        </div>
    );
};

export default Header;
