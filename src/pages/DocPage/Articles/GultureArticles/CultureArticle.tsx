import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar"


const CultureArticle = () => {
    return (
        <ArticleBox>
            <div className="ArticleBox">
                <div className="ArticleBoxImage">
                    <div className="ArticleBoxImageItslefCulture"></div>
                </div>
                <div className="ArticleBoxContent">
                    <h1 className="ArticleBoxContentHeading">У нас правило одно – быть красавчиком</h1>
                    <p className="ArticleBoxContentText">А остальное узнаешь из Подслушки</p>
                </div>
            </div>
            
        </ArticleBox>
    );
};

export default CultureArticle;
