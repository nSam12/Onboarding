import { useActions } from "../../../../../hooks/useAction";
import { StageNames, StageTask } from "../../../../../store/reducers/StagesReducer/StagesReducerTypes";
import "./ModalWindow.css";

export interface ModalWindowProps{
    task:StageTask | undefined,
    closeModal:any
}

const ModalWindow = (props: ModalWindowProps) => {

    const {SetTaskCompleteActionCreator}  = useActions();
    if(props.task === undefined){
        return <div>NO TASK</div>
    }
    const taskName:string = props.task.name;
    const SetTaskStatus = () =>{
        SetTaskCompleteActionCreator(StageNames.STORMING, taskName, 100);
    }

    console.log("From modAL", props.task)
    return <div className="ModalWindow">
        <h1>{props.task.name}</h1>
        <h2> Эта задача от {props.task.author?.name} из {props.task.author?.department.name}</h2>
        <h2>{props.task.longDescription}</h2>
        <button onClick={SetTaskStatus}> Отметить задачу выполннной</button>
        <button onClick={props.closeModal}>Закрыть</button>
    </div>;
};

export default ModalWindow;
