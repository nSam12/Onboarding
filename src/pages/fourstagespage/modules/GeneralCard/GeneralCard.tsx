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
}

const GeneralCard = ({
    children,
    stageName,
    description,
    ...other
}: GeneralCardProps) => {
    let pic = "";

    switch (stageName) {
        case StageNames.FORMING:
            pic = require("/home/sam/Demo projects/onboard/src/pages/fourstagespage/Cat_Form.jpg");
            break;
        case StageNames.STORMING:
            pic = require("/home/sam/Demo projects/onboard/src/pages/fourstagespage/Cat_Storm.jpg");
            break;
        case StageNames.NORMING:
            pic = require("/home/sam/Demo projects/onboard/src/pages/fourstagespage/Cat_Norm.jpg");
            break;
        case StageNames.PERFORMING:
            pic = require("/home/sam/Demo projects/onboard/src/pages/fourstagespage/Cat_Perform.jpg");
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
                <h2>Стадия Форминга</h2>
                <h3>Начни свой путь в компании</h3>
            </div>
            <div className="FormingCatBoxComplete">
                <h3>Пройдено: 0</h3>
            </div>
        </div>
    );
};

export default GeneralCard;

//style = {{backgroundImage: `url(${require(pictureUrl)})`}}
