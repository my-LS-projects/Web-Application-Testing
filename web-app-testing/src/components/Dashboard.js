import React from "react"


export const Dashboard = (props) => {
    return (
        <>
            <button onClick={props.hit}>Hit</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.strike}>Strike</button>
        </>
    )
}