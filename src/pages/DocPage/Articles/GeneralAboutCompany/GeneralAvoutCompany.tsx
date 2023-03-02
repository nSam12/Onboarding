import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar";

const GeneralAboutCompany = () => {
    return <ArticleBox>
        <div className="ArticleBox">
            <div className="ArticleBoxImage">
                <div className="ArticleBoxImageItslefCompany"></div>
            </div>
            <div className="ArticleBoxContent">
                <h1 className="ArticleBoxContentHeading">В деле с 1899 года!</h1>
                <p className="ArticleBoxContentText">Крупнейший кото-ВУЗ на Дальнем Востоке</p>
            </div> 
        </div>
    </ArticleBox>;
};

export default GeneralAboutCompany;

//максимально избавиться от дивов с помощью Article.box.tsx
