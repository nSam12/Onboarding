import { useNavigate } from "react-router-dom";
import Card from "../  Card/Card";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Stages } from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import "./StagesCard.css"


const StagesCard = () => {
    const stages: Stages = useTypedSelector((state) => state.stages);
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{navigate("/fourstages")}} className="SecondPageWrapperStagesCard">
            <h1 className="SecondPageWrapperStagesCardHeading">Карточка со стадиями</h1>
            <h2 className="SecondPageWrapperStagesCardHeading"> Пройдено в forming {String(stages.forming.complete)}</h2>
            <h2 className="SecondPageWrapperStagesCardHeading"> Пройдено в storming {String(stages.storming.complete)}</h2>
        </Card>
    );
};

export default StagesCard;
