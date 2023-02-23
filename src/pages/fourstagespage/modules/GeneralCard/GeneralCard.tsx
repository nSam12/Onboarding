export interface GeneralCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    stageName?: string;
    description?: string;
}

const GeneralCard = ({
    children,
    stageName,
    description,
    ...other
}: GeneralCardProps) => {
    return (
        <div style={{ border: "2px solid green" }} {...other}>
            <h1>{stageName}</h1>
            <h4>{description}</h4>

            {children}
        </div>
    );
};

export default GeneralCard;
