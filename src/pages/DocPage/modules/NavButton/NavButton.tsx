import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavButton.css";

const NavButton = (props: any) => {
    const navigate = useNavigate();
    //const [btnColor, setBtnColor] = useState<string>("rgba(230, 227, 244, 0.867)");

    let btnColor = ""
    console.log(window.location.href);
    if(window.location.href === "http://localhost:3000" + props.url){
        btnColor = "rgba(230, 157, 124, 0.867";
    }else{
        //setWeHere(false);
        btnColor = "rgba(230, 227, 244, 0.867";
    }

    return (
        <button className="NavButton" onClick={() => navigate(props.url)} style = {{background: btnColor}}>
            {props.children}
            <div>{props.ComponentName}</div>
        </button>
    );
};

export default NavButton;
