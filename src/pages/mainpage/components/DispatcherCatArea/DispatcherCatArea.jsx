import { useNavigate } from "react-router-dom";
import "./DispatcherCatArea.css"

const DispatcherCatArea = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className="DispatcherCatAreaHeading">Кот Диспетчер – твой информационный помощник на время онбоардинга</div>
            <div className="DispatcherCatAreaBox">
                <div className="DispatcherCatAreaBoxImage"></div>
                <div className="DispatcherCatAreaBoxContent">
                    <a href="#" className="DispatcherCatAreaBoxContentButtonLink">
                        <button onClick = {()=>{navigate("/auth")}}className="DispatcherCatAreaBoxContentButton">Коты – на борт!</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DispatcherCatArea;