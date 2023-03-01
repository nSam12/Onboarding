import Footer from "../mainpage/components/footer/Footer";
import Header from "../mainpage/components/header/Header";
import CultureArticle from "./Articles/GultureArticles/CultureArticle";
import NavButton from "./modules/NavButton/NavButton";
import { Outlet } from "react-router-dom";
import NavBar from "./modules/NavBar/NavBar";
import "./DockPage.css"

const DocPage = () => {
    return (
        <div>
            <Header />
            <div className="DockPageBox">
                <div className="DockPageBoxNavBarBox">
                    <NavBar></NavBar>
                </div>
                <div className="DockPageBoxImage">
                    <div className="DockPageBoxImageItself"></div>
                </div>
                <div className="DockPageBoxHeading">
                    <h1 className="DockPageBoxHeadingitself">Личный центр управления полётами</h1>
                </div>
                <div className="DockPageBoxInputArea">
                    <input type="text" placeholder="Что ищу..." className="DockPageBoxInputAreaItself"></input>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DocPage;
