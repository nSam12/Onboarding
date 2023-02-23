import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
    Stage,
    StageTask,
} from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import Footer from "../../../mainpage/components/footer/Footer";
import Header from "../../../mainpage/components/header/Header";
import TaskItem from "../modules/TaskItem/TaskItem";

const FormingPage = () => {
    const forming: Stage = useTypedSelector((state) => state.stages.forming);
    console.log("FORMING PAGE:", forming);
    const ListItem = forming.tasks.map((element) => <TaskItem task={element}></TaskItem>)

    return (
        <div>
            <Header></Header>
            <h2>ФОРМИНГ</h2>
            <h2> ОПИСАНИЕ ФОРМИНГА</h2>
            <h4> Пройдено {forming.complete}</h4>
            <ul>{ListItem}</ul>
            <Footer></Footer>
        </div>
    );
};

export default FormingPage;