import Footer from "../mainpage/components/footer/Footer";
import Header from "../mainpage/components/header/Header";
import FormingCard from "./modules/FormingCard/FormingCard";
import NormingCard from "./modules/NormingCard/NormingCard";
import PerformingCard from "./modules/PerformingCard/PerformingCard";
import StormingCard from "./modules/StormingCard/StormingCard";
import "./FourStagesPage.css"
import GeneralCard from "./modules/GeneralCard/GeneralCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";



const FourStagesPage = () =>{

    const stages = useTypedSelector((state) => state.stages);

    return <div>
        <Header/>
        <div className="FourStagesPageWrapper">
            <FormingCard stageCatName = "форминга" description ="Начни свой путь в компании" stageCompelte ={stages.forming.complete} ></FormingCard>
            <StormingCard stageCatName = "шторминга" description ="Порабай с первыми задачами" stageCompelte ={stages.storming.complete}></StormingCard>
            <NormingCard stageCatName = "норминга" description = "Полноценно присоединяйся" stageCompelte ={0}></NormingCard>
            <PerformingCard stageCatName = "перформинга" description ="Получи фидбэк" stageCompelte ={0}></PerformingCard>
        </div>
        <Footer/>
    </div>;
}

export default FourStagesPage;
