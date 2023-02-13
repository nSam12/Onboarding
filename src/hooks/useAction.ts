import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreator from "../store/action-creators/";

export const LoginAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreator, dispatch);
};
