
import { FC } from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    
}

const Card = ({children, ...other}: CardProps) => {
    return <div style ={{border: '2px solid black'}} {...other}>
        {children}
    </div>
}

export default Card;