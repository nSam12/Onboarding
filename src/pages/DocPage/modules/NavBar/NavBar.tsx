import NavButton from "../NavButton/NavButton";

const NavBar = () =>{
    return <div>
        <NavButton url = "/docs/general" ComponentName = "Общие сведенья про компанию"></NavButton>
        <NavButton url = "/docs/culture" ComponentName = "Культура компании"></NavButton>
        <NavButton url = "/docs/mydepartment" ComponentName = "Про мой департамент"></NavButton>
        <NavButton url = "/docs/officeplan" ComponentName = "План офиса"></NavButton>
        <NavButton url = "/docs/technical" ComponentName = "Обзор на документацию проекта"></NavButton>
        <NavButton url = "/docs/work" ComponentName = "Описание рабочего процесса"></NavButton>
    </div>
}

export default NavBar;