import "./OnboardingDescription.css";

const OnboardingDescription = () => {
    return (
        <div className="OnboardingDescriptionBox">
            <div className="OnboardingDescriptionBoxLeft">
                <h2 className="OnboardingDescriptionBoxLeftHeading">Что такое CATS – ON BOARD?</h2>
                <div className="OnboardingDescriptionBoxLeftContent">
                    <b>Онбоардинг</b> – это процесс из четырёх этапов. 
                    В ходе каждого из них сотрудник приобретает новые навыки,
                    узнавая о работе в компании всё больше нового. С каждым этапов его личная 
                    ответственность возрастает, как, впрочем, и количество поставленных задач. Наш сервис
                    предлагает каждому новому сотруднику плавное вхождение в профессиональную жизнь компании.
                </div>
            </div>
            <div className="OnboardingDescriptionBoxRight">
            </div>
        </div>
    );
};

export default OnboardingDescription;