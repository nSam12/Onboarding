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
            <h2>ФОРМИНГ</h2>
            <h2> ОПИСАНИЕ ФОРМИНГА</h2>
            <h4> Пройдено {forming.complete}</h4>
            <button onClick={()=>{setModalOpen(true)}}>Пройти пульс-опрос</button>
            <div>{isModalOpen&& <QuestionModal closeModal = {CloseModal}></QuestionModal>}</div>
            <Footer></Footer>
        </div>
    );
 
};

export default FormingPage;