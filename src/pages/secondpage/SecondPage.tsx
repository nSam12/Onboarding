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
import DispatcherCard from "./components/ DispatcherCard/DispatcherCard";

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
            <div className="SecondPageBox">
                <StagesCard></StagesCard>
                <DispatcherCard></DispatcherCard>
                <div className="SecondPageWrapper">
                    <h1 className="SecondPageWrapperHeading">{String(auth.user.name) + " " +String(auth.user.id) + " "+ String(auth.user.email)}</h1>
                    <div className="SecondPageWrapperButtonArea">
                        <button onClick={LogoutFunction} className="SecondPageWrapperExitButton"> Выйти </button>
                        <button
                            onClick={() => {
                                navigate("/");
                            }} className="SecondPageWrapperToMainButton"
                        >
                            На главную
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SecondPage;
