import Footer from "../mainpage/components/footer/Footer";
import Header from "../mainpage/components/header/Header";
import FormingCard from "./modules/FormingCard/FormingCard";
import NormingCard from "./modules/NormingCard/NormingCard";
import PerformingCard from "./modules/PerformingCard/PerformingCard";
import StormingCard from "./modules/StormingCard/StormingCard";

const FourStagesPage = () =>{
    return <div>
        <Header/>
        Это страница с 4 стадиями
        <FormingCard stageName = "Кот Форм" description ="Описание процесса форминга" ></FormingCard>
        <StormingCard stageName = "Кот Шторм" description ="Описание процесса шторминга"></StormingCard>
        <NormingCard stageName = "Кот Норм" description ="Описание процесса норминга"></NormingCard>
        <PerformingCard stageName = "Кот Перформ" description ="Описание процесса перформинга"></PerformingCard>
        <Footer/>
    </div>;
}

export default FourStagesPage;