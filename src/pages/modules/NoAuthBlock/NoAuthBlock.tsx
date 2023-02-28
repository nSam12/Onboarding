import { useNavigate } from "react-router-dom";
import Header from "../../mainpage/components/header/Header";
import Footer from "../../mainpage/components/footer/Footer";
import "./NoAuthBlock.css"

const NoAuthBlock = () =>{
    const navigate = useNavigate()

    return ( 
        <div>
            <Header/>
            <div className="NoAuthBlockBox">
                <div className="NoAuthBlockBoxImageBox">
                    <div className="NoAuthBlockBoxImageBoxImage"></div>
                </div>
                <div className="NoAuthBlockBoxImageBoxHeadingBox">
                    <h2 className="NoAuthBlockBoxImageBoxHeading">Упс! Похоже, Вы не зарегистрированы!</h2>
                </div>
                <div className="NoAuthBlockBoxButtonBox">
                    <button onClick={()=>{navigate("/");}} className="NoAuthBlockBoxButtonBoxButton"> На главную страницу</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NoAuthBlock;