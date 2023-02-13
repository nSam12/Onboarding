import { text } from "stream/consumers";
import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className="LoginForm">
            <h1>Пожалуйста авторизуйтесь</h1>
            <input type="text" placeholder="введите логин" />
            <input type="password" placeholder="введите пароль" />
            <button> Войти </button>
        </div>
    );
};

export default LoginForm;
