import NavButton from "../NavButton/NavButton";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="NavBarBox">
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/general"
                    ComponentName="Общие сведенья про компанию"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/culture"
                    ComponentName="Культура компании"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/mydepartment"
                    ComponentName="Про мой департамент"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/officeplan"
                    ComponentName="План офиса"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/technical"
                    ComponentName="Обзор на документацию проекта"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs/work"
                    ComponentName="Описание рабочего процесса"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton">
                <NavButton
                    url="/docs"
                    ComponentName="Страница кота диспетчера"
                ></NavButton>
            </button>
            <button className="NavBarBoxButton NavBarBoxButtonNarrower">
                <NavButton
                    url="/twocards"
                    ComponentName="Назад - к 2м карточкам"
                ></NavButton>
            </button>
        </div>
    );
};

export default NavBar;
