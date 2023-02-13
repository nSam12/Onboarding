import { Navigate, Route } from "react-router-dom";
import NoAuthBlock from "../../pages/modules/NoAuthBlock/NoAuthBlock";

export interface PrivateRouteProps{
    path?: string
    isAuth: boolean
    children?: any
    component: React.ComponentType
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({component: RouteComponent, isAuth}) => {
    //return isAuth ? <Route element = {children} path = {path} key = {path}/> : <NoAuthBlock/>
    if(isAuth){
        return <RouteComponent/>
    }
    return <NoAuthBlock/>
};

export default PrivateRoute;
