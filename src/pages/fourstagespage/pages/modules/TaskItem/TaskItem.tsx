import { useState } from "react";
import { StageTask } from "../../../../../store/reducers/StagesReducer/StagesReducerTypes";
import ModalWindow from "../ModalWindow/ModalWindow";

export interface TaskItemProps {
    task: StageTask;
    openModal: any;
}

const TaskItem = (props: TaskItemProps) => {


    return (
        <div style={{ border: "2px solid red" }} onClick ={()=>{props.openModal(props.task)}}>
            <h3>{props.task.name}</h3>
            <h2>{props.task.description}</h2>
            <h1>Выполнено {props.task.complete}</h1>
        </div>
    );
};

export default TaskItem;
