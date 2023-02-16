import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/authpage/AuthPage";
import MainPage from "../pages/mainpage/MainPaget";
import SecondPage from "../pages/secondpage/SecondPage";
import PrivateRoute from "./privateroute/PrivateRoute";
import PageNoFind from "../pages/pagenofind/PageNoFind";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Navigation = () => {
    const auth = useTypedSelector((state) => state.auth);
    return (
        <Routes>
            <Route element={<MainPage />} path="/" key="/" />
            <Route element={<AuthPage />} path="/auth" key="/auth" />
            <Route element={<PageNoFind />} path="*" />
            <Route
                element={<PrivateRoute isAuth={auth.isAuth} component={SecondPage} />}
                path="/fourstage"
            />
        </Routes>
    );
};

export default Navigation;
