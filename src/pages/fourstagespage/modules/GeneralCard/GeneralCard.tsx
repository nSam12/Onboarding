import "./GeneralCard.css";
export interface GeneralCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    stageName?: string,
    description?: string,
}

const GeneralCard = ({children, stageName, description, ...other}: GeneralCardProps) =>{
    return <div {...other}>
        <div className="FormCatBox">
        </div>
        <div className="FormCatBoxDescription">
            <h2>Стадия Форминга</h2>
            <h3>Начни свой путь в компании</h3>
        </div>
        <div className="FormingCatBoxComplete">
            <h3>Пройдено: 0</h3>
        </div>
    </div>
}

export default GeneralCard;