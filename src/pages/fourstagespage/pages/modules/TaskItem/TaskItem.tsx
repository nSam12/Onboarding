import { useState } from "react";
import { StageTask } from "../../../../../store/reducers/StagesReducer/StagesReducerTypes";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./TaskItem.css";


export interface TaskItemProps {
    task: StageTask;
    openModal: any;
}

const TaskItem = (props: TaskItemProps) => {


    return (
        <div className="ListItemsBox">
            <div onClick ={()=>{props.openModal(props.task)}} className="ListItemsBoxBox">
                <h3>{props.task.name}</h3>
                <h2>{props.task.description}</h2>
                <h1>Выполнено: {props.task.complete}</h1>
            </div>
        </div>
    );
};

export default TaskItem;
