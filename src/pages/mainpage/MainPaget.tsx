import "./MainPage.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutStages from "./components/AboutStages/AboutStages";
import CatStage from "./components/catstage/CatStage";
import BigButton from "./components/bigbutton/BigButton";

const MainPage = () => {
    return (
        <div className="MainPage">
            <Header/>
            <AboutStages/>
            <CatStage description="Описание кота норм" catName="Кот Форм" left={true}/>
            <CatStage description="Описание кота шторм" catName="Кот Шторм" left={false}/>
            <CatStage description="Описание кота норм" catName="Кот Норм" left={true}/>
            <CatStage description="Описание кота Перформ" catName="Кот Перформ" left={false}/>
            <BigButton/>
            <Footer/>
        </div>
    );
};

export default MainPage;
