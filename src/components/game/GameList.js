import React, { useState, useEffect } from "react"
import { useHistory, Link } from 'react-router-dom'
import { getGames } from "./GameManager.js"

export const GameList = (props) => {
    const history = useHistory()
    const [games, setGames] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/game/new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><Link to={{pathname: `/games/${game.id}`}}>{game.title}</Link> by {game.designer}</div>
                        <div className="game__players">{game.num_of_players} players needed</div>
                        <div className="game__skillLevel">Age recommendation: {game.age}</div>
                        <div>
                            <button className="btn-edit" onClick={() => history.push(`/game/edit/${game.id}`)}>Edit</button>
                        </div><br></br>
                    </section>
                })
            }
        </article>
    )
}