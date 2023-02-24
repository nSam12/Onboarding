import { useNavigate } from "react-router-dom";
import Card from "../  Card/Card";
import "./DispatcherCards.css"

const DispatcherCard = () =>{
    const navigate = useNavigate()

    return  <Card onClick={()=>{navigate("/docs")}} className="SecondPageWrapperDispatcherCards">
        <div></div>
        <div className="SecondPageWrapperDispatcherCardsImage"></div>
        <div></div>
        <div></div>
        <div className="SecondPageWrapperDispatcherCardsButtonBox">
            <button className="SecondPageWrapperDispatcherCardsButton">Личный центр управления полётов</button>
        </div>
    </Card>
}

export default DispatcherCard;