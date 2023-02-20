import React, { useEffect } from "react";
import "./App.css";
import AuthPage from "./pages/authpage/AuthPage";
import MainPage from "./pages/mainpage/MainPaget";
import SecondPage from "./pages/secondpage/SecondPage";
import Navigation from "./routers/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routers/privateroute/PrivateRoute";
import Header from "./pages/mainpage/components/header/Header";
import PageNoFind from "./pages/pagenofind/PageNoFind";
import { Provider } from "react-redux";
import { basestore } from "./store";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useAction";
import { IUser } from "./services/AuthResponse";

function App() {
    const {CheckAuthToServerActionCreator, LoginActionCreator} = useActions();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            CheckAuthToServerActionCreator();
        }
    }, []);

    return (
        <div className="App">
            <Navigation />
        </div>
    );
}

export default App;

// <Navigation/>
