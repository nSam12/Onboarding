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

            <Footer></Footer>
        </div>
    );
};

export default StormingPage;
