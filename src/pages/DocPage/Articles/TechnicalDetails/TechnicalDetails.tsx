import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar";

const TechnicalDetails = () => {
    return <ArticleBox>
        <div className="ArticleBox">
            <div className="ArticleBoxImage">
                <div className="ArticleBoxImageItslefTechDetails"></div>
            </div>
            <div className="ArticleBoxContent">
                <h1 className="ArticleBoxContentHeading">По документации у нас всё чётко</h1>
                <p className="ArticleBoxContentText">Постепенно мотай её на ус</p>
            </div>
        </div>
       
    </ArticleBox>
}

export default TechnicalDetails;