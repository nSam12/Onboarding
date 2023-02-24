import { FC, useEffect } from "react";
import { text } from "stream/consumers";
import { useState } from "react";
import "./LoginForm.css";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";
import { IUser } from "../../../../services/AuthResponse";
import { AuthToServerTypes } from "../../../../store/reducers/AuthReducer/AuthReducerTypes";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const auth = useTypedSelector((state) => state.auth);
    const { LoginActionCreator, LogoutActionCreator, LoginToServerActionCreator } = useActions();
    const navigate = useNavigate();
    useEffect(()=>{
        if(auth.isAuth){
            navigate("/twocards");
        }
    })

    const LoginSubmit = () =>{

        const tmpUser:IUser ={
            email: "mail",
            id: "12",
            name: "dan"
        }
        console.log("after click", email, password)
        LoginToServerActionCreator({login:email, password});
        console.log("aвторизоавны ли мы", auth.isAuth)

    }

    return (
        <div className="LoginForm">
            <h1 className="LoginFormHeading">Пожалуйста, авторизуйтесь</h1>
            <div className="LoginFormInputBox">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="введите логин"
                    className="LoginFormInput"
                />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="введите пароль" className="LoginFormInput"/>
            </div>
            <div className="LoginFormButtonBox">
                <button onClick={LoginSubmit} className="LoginFormButton"> Войти </button>
            </div>
        </div>
    );
};


export default LoginForm;
