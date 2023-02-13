import { Link, Navigate, } from "react-router-dom";
import "./BigButton.css";


const BigButton = () => {

    return (
        <Link to = "auth"className="BigButton" >
            Cats onboard!
        </Link>
    );
};

export default BigButton;