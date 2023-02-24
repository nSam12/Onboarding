import Footer from "../../../mainpage/components/footer/Footer";
import Header from "../../../mainpage/components/header/Header";
import {
    Stage,
    StageTask,
} from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import TaskItem from "../modules/TaskItem/TaskItem";
import { useState } from "react";
import ModalWindow from "../modules/ModalWindow/ModalWindow";
import "./StormingPage.css";

const StormingPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [taskForModal, setTaskForModal] = useState<StageTask>();

    const OpenModal = (task: StageTask) => {
        setTaskForModal(task);
        setModalOpen(true);
    };

    const CloseModal = () => {
        setModalOpen(false);
    };

    const stormingg: Stage = useTypedSelector((state) => state.stages.storming);
    //const ListItem:any = stormingg.tasks.map((element) => (
    //  <TaskItem task={element} openModal={OpenModal}></TaskItem>
    //));

    let i = 0;
    let list: any = [];
    for (i = 0; i < stormingg.tasks.length; i++) {
        list = list.concat(
            <TaskItem
                task={stormingg.tasks[i]}
                openModal={OpenModal}
            ></TaskItem>
        );
    }
    console.log(stormingg)
    console.log("IN STORMING", list);
    return (
        <div>
            <Header></Header>
            <h1> ШтОРМИНГ </h1>
            <h2> ОПИСАНИЕ ШТОРМИНГА</h2>
            <h4> Пройдено {stormingg.complete}</h4>
            <ul>{list}</ul>
            {isModalOpen && (
                <ModalWindow
                    task={taskForModal}
                    closeModal={CloseModal}
                ></ModalWindow>
            )}

            <div className="StormingPageBox">
                <div className="StormingPageBoxHeadings">
                    <h1> Шторминг </h1>
                    <h2> Этап, на котором придётся засучить рукава!</h2>
                    <h4> Выполнено заданий {stormingg.complete}</h4>
                </div>
                <div>
                    <ul  className="StormingPageBoxItems">{ListItem}</ul>
                    {isModalOpen && <ModalWindow task={taskForModal} closeModal={CloseModal}></ModalWindow>}`
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default StormingPage;
