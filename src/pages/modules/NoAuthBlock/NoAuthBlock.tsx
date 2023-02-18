import { useNavigate } from "react-router-dom";

const NoAuthBlock = () =>{
    const navigate = useNavigate()

    return <div> Вы не авторизованы
        <button onClick={()=>{navigate("/");}}> На главную страницу</button>
    </div>
}

export default NoAuthBlock;