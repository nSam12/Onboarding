import "./SecondPage.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

const SecondPage = () => {
    const auth = useTypedSelector((state) => state.auth);
    const {LogoutToServerActionCreator} = useActions();

    const LogoutFunction = () =>{
        console.log("button logout pressed")
       
        LogoutToServerActionCreator();
    }

    return (
        <div className="SecondPage">
            {" "}
            <h1>здесь будут 2 карточки</h1>
            <h2>
                {" "}
                Пользователь{" "}
                {String(auth.user.email) +
                    " " +
                    String(auth.user.id) +
                    " " +
                    String(auth.user.id)}{" "}
                Статус {String(auth.isAuth)}
            </h2>

            <button onClick={LogoutFunction}> Выйти </button>
        </div>
    );
};

export default SecondPage;
