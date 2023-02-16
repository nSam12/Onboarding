import { Link, Navigate, } from "react-router-dom";
import "./BigButton.css";


const BigButton = () => {

    return (
        <div className="BigButtonBox">
            <Link to = "auth"className="BigButton" >
                Cats onboard!
            </Link>
        </div>
    );
};

export default BigButton;