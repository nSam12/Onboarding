import NavButton from "../NavButton/NavButton";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="NavBarBox">
            <div className="NavBarBoxCompanyOverview">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/general"
                        ComponentName="Общие сведенья про компанию"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxCompanyCulture">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/culture"
                        ComponentName="Культура компании"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxMyDepartment">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/mydepartment"
                        ComponentName="Про мой департамент"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxOfficePlan">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/officeplan"
                        ComponentName="План офиса"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxProjectDocumentationOverview">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/technical"
                        ComponentName="Обзор на документацию проекта"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxWOrkFlowDescription">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs/work"
                        ComponentName="Описание рабочего процесса"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxDispatcherTheCatPage">
                <button className="NavBarBoxButton">
                    <NavButton
                        url="/docs"
                        ComponentName="Страница кота диспетчера"
                    ></NavButton>
                </button>
            </div>
            <div className="NavBarBoxBackToTwoCards">
                <button className="NavBarBoxButton NavBarBoxButtonNarrower">
                    <NavButton
                        url="/twocards"
                        ComponentName="Назад - к 2м карточкам"
                    ></NavButton>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
