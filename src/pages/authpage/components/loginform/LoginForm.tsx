import { FC } from "react";
import { text } from "stream/consumers";
import { useState } from "react";
import "./LoginForm.css";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useAction";
import { IUser } from "../../../../services/AuthResponse";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const auth = useTypedSelector((state) => state.auth);
    const { LoginActionCreator, LogoutActionCreator } = useActions();
    

    const LoginSubit = () =>{
        //console.log(email, password);
        console.log(auth.isAuth, auth.user.email);
        const tmpUser:IUser ={
            email: "mail",
            id: "12",
            name: "dan"
        }
        LoginActionCreator(tmpUser);
    }

    return (
        <div className="LoginForm">
            <h1>Пожалуйста авторизуйтесь</h1>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="введите логин"
            />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="введите пароль" />
            <button onClick={LoginSubit}> Войти </button>
        </div>
    );
};

export default LoginForm;
