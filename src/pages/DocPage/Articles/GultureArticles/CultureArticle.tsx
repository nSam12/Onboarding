import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import "./CultureArticle.css"

const CultureArticle = () => {
    return (
        <ArticleBox>
            <div className="ArticleBoxCulture">
                <div className="ArticleBoxCultureImage">
                    <div className="ArticleBoxCultureImageItself"></div>
                </div>
                <div className="ArticleBoxCultureHeading">
                    <h2>У нас правило одно – будь красавчиком</h2>
                </div>
                <div className="ArticleBoxCultureText">
                    <p>А остальное узнаешь из Подслушки</p>
                </div>
                <div className="ArticleBoxCultureButtonArea">
                    <button className="ArticleBoxCultureButtonAreaButton">Следующий раздел</button>
                </div>
            </div>
           
            
        </ArticleBox>
    );
};

export default CultureArticle;
