import { useNavigate } from "react-router-dom";
import Card from "../  Card/Card";
import "./DispatcherCards.css"

const DispatcherCard = () =>{
    const navigate = useNavigate()

    return  <Card onClick={()=>{navigate("/docs")}} className="SecondPageWrapperDispatcherCards"> Карточка с диспетчером</Card>
}

export default DispatcherCard;