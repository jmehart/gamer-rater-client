import React, { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { useHistory } from "react-router"
import { getGame, getGameCategories, deleteGame, getGameRatings } from "./GameManager.js"



export const GameDetails = () => {
    const { gameId } = useParams()
    const [game, setGame] = useState({})
    const [gameCategories, setGameCategories] = useState([])
    const [gameRatings, setGameRatings] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGame(gameId)
            .then(res => setGame(res))
    }, {})

    useEffect(() => {
        getGameCategories()
            .then(res => setGameCategories(res))
    }, [])

    useEffect(() => {
        getGameRatings()
            .then(res => setGameRatings(res))
    }, [])
    
    return (<>
        <h2>{game.title}</h2>
        <h4>Designer: {game.designer}</h4>
        <h4>Year Released: {game.year_released}</h4>
        <h4>Time to Play: {game.estimated_time}</h4>
        <h4>Number of Players: {game.num_of_players}</h4>
        <h4>Age Recommendation: {game.age}</h4>
        <h4>Category: {gameCategories.map(gc => {
            if (gc.game?.id === game.id) {
                return gc.category?.type
            } else {
                return ""
            }
        })}</h4>
        <h4>Average Rating: {game?.average_rating?.toFixed(2)}</h4>
            <ul>
        <h4>Reviews: {game.reviews?.map(rev => {
                return <li>{rev.review}</li>
            })}</h4>
            </ul>
        <button onClick={() => {history.push(`/games/upload_image/${gameId}`)}}>Upload image of this game</button>
        <button onClick={event => {
            event.preventDefault()
            deleteGame(gameId)
                .then(() => {history.push('/games')})
        }
        }>Delete Game</button>
    </>
    
    
    )    
}