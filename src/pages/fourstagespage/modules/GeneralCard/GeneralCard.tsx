import "./GeneralCard.css";

export enum StageNames {
    FORMING = "FORMING",
    STORMING = "STORMING",
    NORMING = "NORMING",
    PERFORMING = "PERFORMING",
}

export interface GeneralCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    stageName?: StageNames;
    description?: string;
    stageCatName?: string;
    stageCompelte?: number;
}

const GeneralCard = ({
    children,
    stageName,
    description,
    stageCatName,
    stageCompelte,
    ...other
}: GeneralCardProps) => {
    let pic = "";

    switch (stageName) {
        case StageNames.FORMING:
            pic = require("../../Cat_Form.jpg");
            break;
        case StageNames.STORMING:
            pic = require("../../Cat_Storm.jpg");
            break;
        case StageNames.NORMING:
            pic = require("../../Cat_Norm.jpg");
            break;
        case StageNames.PERFORMING:
            pic = require("../../Cat_Perform.jpg");
            break;
    }

    console.log("pic", pic);
    return (
        <div {...other}>
            <div
                className="FormCatBox"
                style={{ backgroundImage: `url("${pic}")` }}
            ></div>
            <div className="FormCatBoxDescription">
                <h2>Стадия {stageCatName}</h2>
                <h3> {description}</h3>
            </div>
            <div className="FormingCatBoxComplete">
                <h3>Пройдено: {stageCompelte}</h3>
            </div>
        </div>
    );
};

export default GeneralCard;

//style = {{backgroundImage: `url(${require(pictureUrl)})`}}
