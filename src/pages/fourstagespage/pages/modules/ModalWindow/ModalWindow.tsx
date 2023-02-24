import { StageTask } from "../../../../../store/reducers/StagesReducer/StagesReducerTypes";
import "./ModalWindow.css";

export interface ModalWindowProps{
    task:StageTask | undefined,
    closeModal:any
}

const ModalWindow = (props: ModalWindowProps) => {
    if(props.task === undefined){
        return <div>NO TASK</div>
    }
    console.log("From modAL", props.task)
    return <div className="ModalWindow">
        <h1>{props.task.name}</h1>
        <h2> Эта задача от {props.task.author?.name} из {props.task.author?.department.name}</h2>
        <h2>{props.task.longDescription}</h2>
        <button> Отметить задачу выполннной</button>
        <button onClick={props.closeModal}>Закрыть</button>
    </div>;
};

export default ModalWindow;
