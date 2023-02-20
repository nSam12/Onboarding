import { useNavigate } from "react-router-dom";
import Card from "../  Card/Card";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Stages } from "../../../../store/reducers/StagesReducer/StagesReducerTypes";

const StagesCard = () => {
    const stages: Stages = useTypedSelector((state) => state.stages);
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{navigate("/fourstages")}}>
            <h1>Карточка со стадиями</h1>
            <h2> Пройдено в forming {String(stages.forming.complete)}</h2>
            <h2> Пройдено в storming {String(stages.storming.complete)}</h2>
        </Card>
    );
};

export default StagesCard;
