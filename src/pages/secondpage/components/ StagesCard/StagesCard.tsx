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
            <div className="SecondPageWrapperStagesCardImage">
                <div></div>
                <div className="SecondPageWrapperStagesCardImageItself"></div>
                <div></div>
            </div>
            <div className="SecondPageWrapperStagesCardCompleteBox">
                <button className="SecondPageWrapperStagesCardCompleteBoxButton">
                   Пройдено этапов: {String(stages.forming.complete)}
                </button>
            </div>
        </Card>
    );
};

export default StagesCard;
