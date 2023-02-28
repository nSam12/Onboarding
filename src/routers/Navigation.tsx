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
import CultureArticle from "../pages/DocPage/Articles/GultureArticles/CultureArticle";
import ArticleBox from "../pages/DocPage/modules/ArticleBox/ArticleBox";
import { Outlet } from "react-router-dom";
import GeneralAboutCompany from "../pages/DocPage/Articles/GeneralAboutCompany/GeneralAvoutCompany";
import MyDepartment from "../pages/DocPage/Articles/MyDepartment/MyDepartment";
import OfficePlan from "../pages/DocPage/Articles/OfficePlan/OfficePlan";
import TechnicalDetails from "../pages/DocPage/Articles/TechnicalDetails/ TechnicalDatails";
import WorkProcess from "../pages/DocPage/Articles/WorkProcess/WorkProcess";
import PersonalOffice from "../pages/PersonalOffice/PersonalOffice";

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
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={GeneralAboutCompany} />} path="/docs/general" />
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={CultureArticle} />} path="/docs/culture" />
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={MyDepartment} />} path="/docs/mydepartment" />
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={OfficePlan} />} path="/docs/officeplan" />
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={TechnicalDetails} />} path="/docs/technical" />
            <Route element={ <PrivateRoute isAuth={auth.isAuth} component={WorkProcess} />} path="/docs/work" />
            

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

            <Route
                element={
                    <PrivateRoute
                        isAuth={auth.isAuth}
                        component={PersonalOffice}
                    />
                }
                path="/personaloffice"
            />
        </Routes>
    );
};

export default Navigation;
