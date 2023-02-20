import "./SecondPage.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StagesDataService, { FormStage } from "../../services/StagesDaraService";
import { AxiosResponse } from "axios";
import Card from "./components/  Card/Card";
import StagesCard from "./components/ StagesCard/StagesCard";
import Header from "../mainpage/components/header/Header";
import Footer from "../mainpage/components/footer/Footer";
import { AuthState } from "../../store/reducers/AuthReducer/AuthReducerTypes";

const SecondPage = () => {
    const auth:AuthState = useTypedSelector((state) => state.auth);
    const { LogoutToServerActionCreator } = useActions();
    const navigate = useNavigate();

    const [T, setT] = useState()

 

    useEffect(() => {
        StagesDataService.getFormingStage().then((res)=>{
            const data:any = res.data.complite;
            console.log(data);
            setT(data);
        });
        
    }, [setT]);



    const LogoutFunction = () => {
        console.log("button logout pressed");

        LogoutToServerActionCreator();
    };

    return (
        <div className="SecondPage">
            {" "}
            <Header/>
            <h1>{String(auth.user.email)}</h1>
            <button onClick={LogoutFunction}> Выйти </button>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                На главную
            </button>

            <StagesCard></StagesCard>

   
            <Footer/>
        </div>
    );
};

export default SecondPage;
