import GenearalCard, { StageNames } from "../GeneralCard/GeneralCard";
import "./PerformingCard.css"

const PerformingCard = ({...other}) =>{
    return <GenearalCard {...other} className="PerformingCardBox" stageName={StageNames.PERFORMING}>
   
    </GenearalCard>;
}

export default PerformingCard;
