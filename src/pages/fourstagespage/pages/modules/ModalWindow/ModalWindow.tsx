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
        <div className="ModalWindowHeadings">
            <h1>{props.task.name}</h1>
            <h2> Эта задача от {props.task.author?.name} из {props.task.author?.department.name}</h2>
            <h2 className="ModalWindowHeadingsContent">{props.task.longDescription}</h2>
        </div>
        <div className="ModalWindowButtons">
            <button onClick={SetTaskStatus} className="ModalWindowButtonsThemselves"> Отметить задачу выполннной</button>
            <button onClick={props.closeModal} className="ModalWindowButtonsThemselves">Закрыть</button>
        </div>
    </div>;
};

export default ModalWindow;
