import { useNavigate } from "react-router-dom";

const NavButton = (props: any) =>{
    const navigate = useNavigate();

    return <div>
        {props.children}
        <div onClick={()=>navigate(props.url)}>{props.ComponentName}</div>
    </div>;
};

export default NavButton;