import React from "react"


export const Display = (props) => {
    return (
        <>
            <h3>Balls: {props.balls}</h3>
            <h3>Strikes: {props.strikes}</h3>
            <h3>Fouls: {props.fouls}</h3>
        </>

    )
}