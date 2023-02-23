import GenearalCard from "../GeneralCard/GeneralCard";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Stage, Stages } from "../../../../store/reducers/StagesReducer/StagesReducerTypes";
import { useNavigate } from "react-router-dom";
import "./FormingCard.css"


const FormingCard = ({ ...others }) => {
    const stages:Stage = useTypedSelector((state) => state.stages.forming);
    const navigate = useNavigate();

    return <GenearalCard {...others} onClick={()=> navigate("/forming")} className="FourStagesPageWrapperFormBox">
        <h4>Пройдено {stages.complete}</h4>
    </GenearalCard>;
};
export default FormingCard;
