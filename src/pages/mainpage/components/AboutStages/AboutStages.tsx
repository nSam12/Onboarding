import Description from "../description/Description";
import LogoName from "../logoName/LogoName";
import "./AboutStages.css";

const AboutStages = () => {
    return (
        <div className="AboutStages">
            <h3 className="AboutStageHeading"> композиция из всех 5 котов</h3>
            <LogoName/>
            <Description/>
        </div>
    );
};

export default AboutStages;
