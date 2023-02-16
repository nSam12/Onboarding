import LoginForm from "./components/loginform/LoginForm";
import Header from "../mainpage/components/header/Header";
import Footer from "../mainpage/components/footer/Footer";


import "./AuthPage.css"
const AuthPage = () => {
    return (
        <div className="AuthPage">
            <Header/>
            <div className="LoginFormBox">
                <LoginForm/>
            </div>
            <Footer/>
        </div>
    );
};

export default AuthPage;