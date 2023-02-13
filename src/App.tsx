import React from "react";
import "./App.css";
import AuthPage from "./pages/authpage/AuthPage";
import MainPage from "./pages/mainpage/MainPaget";
import SecondPage from "./pages/secondpage/SecondPage";
import Navigation from "./routers/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routers/privateroute/PrivateRoute";
import Header from "./pages/mainpage/components/header/Header";
import PageNoFind from "./pages/pagenofind/PageNoFind";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route element={<MainPage />} path="/" key="/" />
                <Route element={<AuthPage />} path="/auth" key="/auth" />
                <Route element={<PageNoFind />} path="*" />
                <Route element ={<PrivateRoute isAuth = {false} component={SecondPage}/>}  path="/fourstage"/>
            </Routes>
        </div>
    );
}

export default App;

/*
              <Route element={<MainPage />} path="/" key="/" />
                <Route element={<AuthPage />} path="/auth" key="/auth" />
                <PrivateRoute
                    children={<SecondPage />}
                    isAuth={false}
                    path="/fourstage"
                />
*/
