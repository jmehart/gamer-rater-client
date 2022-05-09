import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { deleteGame, getGames } from "./GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getGames()
                .then(setGames)
        },
        []
    )
    return <>
            <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/games/new" })
            }}
        >Register New Game</button>
        {
            games.map(game => {
                return <section key={`game--${game.id}`} className="game">
                <div className="game__title"><Link to={`/games/${game.id}`}>{game.title}</Link> by {game.designer}</div>
                <div className="game__players">{game.num_of_players} players needed</div>
                <div className="game__ageRec">Age Recommendation is {game.age}</div>
                <div className="game__estTimeMinutes">Est play time is {game.estimated_time} minutes</div>
                <div className="game__yearReleased">Year released is {game.year_released}</div>
                <Link to={`/games/edit/${game.id}`}>Edit</Link>
                <button onClick={() => {
                    deleteGame(game.id)
                    .then(() => getGames())
                    .then(data => setGames(data))
                }}>Delete</button>
                <hr />
            </section>
            })
        }
    </>
}