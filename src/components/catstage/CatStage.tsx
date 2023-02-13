import "./CatStage.css";

const CatStage = (props: catStageProps) => {
    return (
        <div className="CatStage">
            {props.left ? (
                <div>
                    <div className="stage_content_image">{props.catName}</div>
                    <div className="stage_content_description">
                        {props.description}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="stage_content_description">
                        {props.description}
                    </div>
                    <div className="stage_content_image">{props.catName}</div>
                </div>
            )}
        </div>
    );
};

export default CatStage;

export interface catStageProps {
    left: boolean;
    description?: string;
    catName?: string;
}
