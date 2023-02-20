import Footer from "../../../mainpage/components/footer/Footer";
import Header from "../../../mainpage/components/header/Header";
import { Stage } from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import TaskItem from "../modules/TaskItem/TaskItem";

const StormingPage = () => {
    const storming: Stage = useTypedSelector((state) => state.stages.storming);
    const ListItem = storming.tasks.map((element) => (
        <TaskItem task={element}></TaskItem>
    ));
    return (
        <div>
            <Header></Header>
            <h1> ШтОРМИНГ </h1>
            <h2> ОПИСАНИЕ ШТОРМИНГА</h2>
            <h4> Пройдено {storming.complete}</h4>
            <ul>{ListItem}</ul>
            <Footer></Footer>
        </div>
    );
};

export default StormingPage;
