import React from "react"


export const Dashboard = (props) => {
    return (
        <>
            <button onClick={props.hit} className="button-hit">Hit</button>
            <button onClick={props.ball} className="button-ball">Ball</button>
            <button onClick={props.foul} className="button-foul">Foul</button>
            <button onClick={props.strike} className="button-strike">Strike</button>
        </>
    )
}