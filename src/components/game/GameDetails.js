import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from "react-router-dom"
import { getSingleGame } from "./GameManager.js";

export const GameDetails = () => {
    // Return ( TITLE, DESIGNER, YEAR RELEASED, NUMBER OF PLAYERS, ESTIMATED TIME TO PLAY, AGE RECOMMENDATION, CATEGORIES)
    const { gameId } = useParams()
    const history = useHistory()

    const [game, setGame] = useState([])

    useEffect(() => {
        getSingleGame(gameId).then(data => setGame(data))
    }, [])

    return (
        <>
            <article className="gameInfo">

            <section key={`game--${game.id}`} className="game">
                <div className="game__title">{game.title} by {game.designer}</div>
                <div className="game__players">{game.num_of_players} players needed</div>
                <div className="game__ageRec">Age Recommendation is {game.age}</div>
                <div className="game__estTimeMinutes">Est play time is {game.estimated_time} minutes</div>
                <div className="game__yearReleased">Year released is {game.year_released}</div>
                </section>

                <Link to={`/games/edit/${game.id}`}>Edit</Link>

            </article>
        </>
    )
}