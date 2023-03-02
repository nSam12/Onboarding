import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import "./GeneralAboutCompany.css"

const GeneralAboutCompany = () => {
    return <ArticleBox>
        <div className="ArticleBoxAboutCompany">
            <div className="ArticleBoxAboutCompanyImage">
                <div className="ArticleBoxAboutCompanyImageItself"></div>
            </div>
            <div className="ArticleBoxAboutCompanyHeading">
                <h2>В деле с 1899 года!</h2>
            </div>
            <div className="ArticleBoxAboutCompanyText">
                <p>ДВФУ – крупнейший ВУЗ на Дальнем Востоке с богатой историей и плодотворным мемным сообществом</p>
            </div>
            <div className="ArticleBoxAboutCompanyButtonArea">
                <button className="ArticleBoxAboutCompanyButtonAreaButton">Следующий раздел</button>
            </div>
        </div>  
    </ArticleBox>;
};

export default GeneralAboutCompany;
