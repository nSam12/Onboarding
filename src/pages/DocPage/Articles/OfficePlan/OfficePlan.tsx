import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar";

const OfficePlan = () => {
    return <ArticleBox>
        <div className="ArticleBox">
            <div className="ArticleBoxImage">
                <div className="ArticleBoxImageItslefOffice"></div>
            </div>
            <div className="ArticleBoxContent">
                <h1 className="ArticleBoxContentHeading">На кампусе у нас не заплутаешь</h1>
                <p className="ArticleBoxContentText">А если всё же заблудишься, спроси у ребят из D, как выбраться из тупика</p>
            </div>
        </div>
        
    </ArticleBox>
}

export default OfficePlan;