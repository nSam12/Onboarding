import Footer from "../mainpage/components/footer/Footer";
import Header from "../mainpage/components/header/Header";
import CultureArticle from "./Articles/GultureArticles/CultureArticle";
import NavButton from "./modules/NavButton/NavButton";
import { Outlet } from "react-router-dom";

const DocPage = () => {
    return (
        <div>
            <Header />
            <input type="text" placeholder="Что ищу..."></input>
            <h1>Страница кота диспетчера</h1>
            <NavButton>Культурные ценности компании</NavButton>
            <NavButton>Общие сведенья про компанию</NavButton>
            <NavButton>Про мой отдел общие сведенья</NavButton>
            <NavButton>Первый рабочий день</NavButton>
            <NavButton>План офиса рядом с моим отделом</NavButton>
            <NavButton>Про организацию рабочих процессов в моем отделе</NavButton>
            <NavButton>Технические сведенья про рабочие процессы в моей команде</NavButton>
            
            <Footer />
        </div>
    );
};

export default DocPage;
