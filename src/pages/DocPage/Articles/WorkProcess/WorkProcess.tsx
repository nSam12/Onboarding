import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar";

const WorkProcess = () => {
    return <ArticleBox>
        <div className="ArticleBox">
            <div className="ArticleBoxImage">
                <div className="ArticleBoxImageItslefWorkProcess"></div>
            </div>
            <div className="ArticleBoxContent">
                <h1 className="ArticleBoxContentHeading">В работе своей главное...</h1>
                <p className="ArticleBoxContentText">...не сгореть в пламени дедлайнов</p>
            </div>
        </div>
        
    </ArticleBox>
}

export default WorkProcess;