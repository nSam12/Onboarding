import Footer from "../mainpage/components/footer/Footer";
import Header from "../mainpage/components/header/Header";
import CultureArticle from "./Articles/GultureArticles/CultureArticle";
import NavButton from "./modules/NavButton/NavButton";
import { Outlet } from "react-router-dom";
import NavBar from "./modules/NavBar/NavBar";

const DocPage = () => {
    return (
        <div>
            <Header />
            <input type="text" placeholder="Что ищу..."></input>
            <h1>Страница кота диспетчера</h1>
            <NavBar></NavBar>
            
            <Footer />
        </div>
    );
};

export default DocPage;
