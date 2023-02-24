import Footer from "../../../mainpage/components/footer/Footer";
import Header from "../../../mainpage/components/header/Header";
import NavBar from "../NavBar/NavBar";

const ArticleBox = (props: any) => {
    return (
        <div>
            <Header />
            <NavBar/>
            {props.children}
            <Footer />
        </div>
    );
};

export default ArticleBox;
