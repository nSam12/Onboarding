import { StageTask } from "../../../../../store/reducers/StagesReducer/StagesReducerTypes";

export interface TaskItemProps {
    task: StageTask;
}

const TaskItem = (props: TaskItemProps) => {
    return (
        <div style={{ border: "2px solid red" }}>
            <h3>{props.task.name}</h3>
            <h2>{props.task.description}</h2>
            <h1>Выполнено {props.task.complete}</h1>
        </div>
    );
};

export default TaskItem;
