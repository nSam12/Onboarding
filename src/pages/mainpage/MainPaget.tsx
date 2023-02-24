import "./MainPage.css";
import Header from "./components/header/Header";
import AboutStages from "./components/AboutStages/AboutStages";
import OnboardingDescription from "./components/OnboardingDescription/OnboardingDescription";
import CatsStages from "./components/CatsStages/CatsStages";
import OnboardingDescriptionStages from "./components/OnboardingDescriptionStages/OnboardingDescriptionStages";
import DispatcherCatArea from "./components/DispatcherCatArea/DispatcherCatArea";
import Footer from "./components/footer/Footer";



const MainPage = () => {
    return (
        <div className="MainPage">
            <Header/>
            <AboutStages/>
            <OnboardingDescription/>
            <OnboardingDescriptionStages/>
            <CatsStages/>
            <DispatcherCatArea/>
            <Footer/>
        </div>
    );
};

export default MainPage;
