import { useNavigate } from "react-router-dom";
import Card from "../  Card/Card";

const DispatcherCard = () =>{
    const navigate = useNavigate()

    return  <Card onClick={()=>{navigate("/docs")}}> Карточка с диспетчером</Card>
}

export default DispatcherCard;