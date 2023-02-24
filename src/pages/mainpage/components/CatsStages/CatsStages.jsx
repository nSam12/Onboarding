import "./CatsStages.css"

const CatsStages = () => {
    return <div className="CatsStagesBox">
        <div className="CatsStageBoxForm">
            <div className="CatsStageBoxFormImage"></div>
            <div className="CatsStageBoxFormText">ФОРМИНГ</div>
        </div>
        <div className="CatsStageBoxStorm">
            <div className="CatsStageBoxStormText">ШТОРМИНГ</div>
            <div className="CatsStageBoxStormImage"></div>
        </div>
        <div className="CatsStageBoxNorm">
            <div className="CatsStageBoxNormImage"></div>
            <div className="CatsStageBoxNormText">НОРМИНГ</div>
        </div>
        <div className="CatsStageBoxPerform">
            <div className="CatsStageBoxPerformText">ПЕРФОРМИНГ</div>
            <div className="CatsStageBoxPerformImage"></div>
        </div>
    </div>;
};

export default CatsStages;
