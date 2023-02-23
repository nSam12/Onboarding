import GenearalCard, { StageNames } from "../GeneralCard/GeneralCard";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Stage } from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import { useNavigate } from "react-router-dom";
import "./StormingCard.css"

const StormingCard = ({...others}) =>{
    const navigate = useNavigate()

    const stages:Stage = useTypedSelector((state) => state.stages.storming);
    return <GenearalCard {...others} onClick={()=>{navigate("/storming")}} className="StormingCardBox" stageName={StageNames.STORMING}>
        <h4>пройдено {stages.complete}</h4>
    </GenearalCard>;
}

export default StormingCard;
