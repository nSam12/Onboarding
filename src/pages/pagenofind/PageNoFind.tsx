import { useNavigate } from "react-router-dom";

const PageNoFind = () => {
    const navigate = useNavigate();
    return (
        <div className="PageNoFind">
           
            NO PAGE
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                На главную
            </button>
        </div>
    );
};

export default PageNoFind;
