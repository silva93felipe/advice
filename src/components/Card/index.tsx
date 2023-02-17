import { Slip } from "../../Pages/Home";
import "./styles.css"

interface CardProps {
    splip: Slip;
    getAdvice():void;
}

export function Card(props: CardProps){
    return (
        <div className="card">
            <h2>{ props.splip.id }</h2>
            <p>{ props.splip.advice }</p>
            <button onClick={props.getAdvice}>Novo</button>
        </div>
    )
}

