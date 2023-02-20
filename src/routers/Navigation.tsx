import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/authpage/AuthPage";
import MainPage from "../pages/mainpage/MainPaget";
import SecondPage from "../pages/secondpage/SecondPage";
import PrivateRoute from "./privateroute/PrivateRoute";
import PageNoFind from "../pages/pagenofind/PageNoFind";
import { useTypedSelector } from "../hooks/useTypedSelector";
import FourStagesPage from "../pages/fourstagespage/FourStagesPage";
import DocPage from "../pages/DocPage/DocPage";
import FormingPage from "../pages/fourstagespage/pages/FormingPage/FormingPage";
import StormingPage from "../pages/fourstagespage/pages/StormingPage/StormingPage";

const Navigation = () => {
    const auth = useTypedSelector((state) => state.auth);
    return (
        <Routes>
            <Route element={<MainPage />} path="/" key="/" />
            <Route element={<AuthPage />} path="/auth" key="/auth" />
            <Route element={<PageNoFind />} path="*" />
            <Route
                element={
                    <PrivateRoute isAuth={auth.isAuth} component={SecondPage} />
                }
                path="/twocards"
            />

            <Route
                element={
                    <PrivateRoute
                        isAuth={auth.isAuth}
                        component={FourStagesPage}
                    />
                }
                path="/fourstages"
            />

            <Route
                element={
                    <PrivateRoute isAuth={auth.isAuth} component={DocPage} />
                }
                path="/docs"
            />

            <Route
                element={
                    <PrivateRoute
                        isAuth={auth.isAuth}
                        component={FormingPage}
                    />
                }
                path="/forming"
            />

            <Route
                element={
                    <PrivateRoute
                        isAuth={auth.isAuth}
                        component={StormingPage}
                    />
                }
                path="/storming"
            />
        </Routes>
    );
};

export default Navigation;
