import ArticleBox from "../../modules/ArticleBox/ArticleBox";
import NavBar from "../../modules/NavBar/NavBar";

const MyDepartment = () => {
    return <ArticleBox>
        <div className="ArticleBox">
            <div className="ArticleBoxImage">
                <div className="ArticleBoxImageItslefMyDepartment"></div>
            </div>
            <div className="ArticleBoxContent">
                <h1 className="ArticleBoxContentHeading">У нас самая лучшая кафедра мемологии в России</h1>
                <p className="ArticleBoxContentText">На ней мы зарабатываем гослинги</p>
            </div>
        </div>
        
    </ArticleBox>
}

export default MyDepartment;