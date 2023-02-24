import "./DispatcherCatArea.css"

const DispatcherCatArea = () => {
    return (
        <div>
            <div className="DispatcherCatAreaHeading">Кот Диспетчер – твой информационный помощник на время онбоардинга</div>
            <div className="DispatcherCatAreaBox">
                <div className="DispatcherCatAreaBoxImage"></div>
                <div className="DispatcherCatAreaBoxContent">
                    <a href="#" className="DispatcherCatAreaBoxContentButtonLink">
                        <button className="DispatcherCatAreaBoxContentButton">Коты – на борт!</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DispatcherCatArea;