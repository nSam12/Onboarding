import NoAuthBlock from "../../pages/modules/NoAuthBlock/NoAuthBlock";

export interface PrivateRouteProps{
    path?: string
    isAuth: boolean
    children?: any
    component: React.ComponentType
}

const PrivateRoute:React.FC<PrivateRouteProps> = ({component: RouteComponent, isAuth}) => {
    if(isAuth){
        return <RouteComponent/>;
    }
    return <NoAuthBlock/>;
};

export default PrivateRoute;
