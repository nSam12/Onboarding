import { useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
    Stage,
    StageTask,
} from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import Footer from "../../../mainpage/components/footer/Footer";
import Header from "../../../mainpage/components/header/Header";
import QuestionModal from "../modules/QuestionModal/QuestionModal";
import TaskItem from "../modules/TaskItem/TaskItem";
import "./FormingPage.css"

const FormingPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const CloseModal = () =>{
        setModalOpen(false);
    }
    const forming: Stage = useTypedSelector((state) => state.stages.forming);
    console.log("FORMING PAGE:", forming);
    
    return (
        <div>
            <Header></Header>
            <div className="FormingPageTopBox">
                <div className="FormingPageTopBoxImageBox">
                    <div className="FormingPageTopBoxImageBoxItself"></div>
                </div>
                <div className="FormingPageMiddleBox">
                    <h2 className="FormingPageMiddleBoxHeading">ФОРМИНГ</h2>
                    <h2> Твоё плавное начало новой работы</h2>
                    <h4> Пройдено: {forming.complete}</h4>
                </div>
            </div>
            <div className="FormingPageBottomBox">
                <button onClick={()=>{setModalOpen(true)}} className="FormingPageBottomBoxButton">Пройти пульс-опрос</button>
                <div>{isModalOpen&& <QuestionModal closeModal = {CloseModal}></QuestionModal>}</div>
            </div>
            <Footer></Footer>
        </div>
    );
 
};

export default FormingPage;