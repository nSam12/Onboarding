import GenearalCard, { StageNames } from "../GeneralCard/GeneralCard";
import "./NormingCard.css"


const NormingCard = ({...other}) =>{
    return <GenearalCard {...other} className="NormingCardBox" stageName={StageNames.NORMING}>
        
    </GenearalCard>;
}

export default NormingCard;
