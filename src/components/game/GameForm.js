import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createGame, getCategories, getGame, updateGame} from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [categories, setCategories] = useState([])
    const [currentGame, setCurrentGame] = useState({})
    const [selectedCat, setSelectedCat] = useState([])

    
    const getGameToEdit = () => {
        if (gameId) {
            getGame(gameId)
            .then((foundGame => setCurrentGame({
                ...foundGame,
                gameCategoryId: foundGame.categories.id
            })))
        } else {
            setCurrentGame({
                title: "",
                description: "",
                designer: "",
                year_released: 0,
                num_of_players: 0,
                estimated_time: 0,
                age: 0
            })
        }
    }

    console.log(currentGame.categories)

    useEffect(() => {
        getCategories().then(data => setCategories(data))
    }, [])

    useEffect(() => {
        getGameToEdit()
    }, [gameId])
    
    const handleControlledInputChange = (event) => {
        const newGame = Object.assign({}, currentGame)
        newGame[event.target.name] = event.target.value
        setCurrentGame(newGame)
    }

    // const handleCats = (event) => {
    //     const category = Object.assign({}, newCat)
    //     newCat[event.target.name] = event.target.value
    //     setNewCat(category)
    // }

    const constructNewGame = () => {
        const copyGame = {...currentGame}
        console.log(copyGame)
        createGame(copyGame)
    }

    // const constructNewCats = () => {
    //     const copyCat = {...newCat}
    //     createCats(copyCat)
    // }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">{gameId ? 'Edit Game: ' : 'Register New Game: '}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        placeholder="Title"
                        value={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <div className="form-group">
                <label htmlFor="gameDescription">Game Description: </label>
                <input type="text" name="description" className="form-control"
                    placeholder="Description"
                    value={currentGame.description}
                    defaultValue="Describe the Game"
                    onChange={handleControlledInputChange}>
                </input>
            </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        placeholder="Designer"
                        value={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="number" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="num_of_players">Number of Players: </label>
                    <input type="number" name="num_of_players" required autoFocus className="form-control"
                        value={currentGame.num_of_players}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimated_time">Time to play (minutes): </label>
                    <input type="number" name="estimated_time" required autoFocus className="form-control"
                        value={currentGame.estimated_time}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age">Recommended age: </label>
                    <input type="number" name="age" required autoFocus className="form-control"
                        value={currentGame.age}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <div className="form-group">
                <label htmlFor="category">Category: </label>
                <select type="text" name="categories" className="form-control"
                    placeholder="Category"
                    onChange={ (e) => {
                        const copy = [...selectedCat]
                        copy.push(parseInt(e.target.value))
                        setSelectedCat(copy)
                    }
                    }>
                    <option>Select Category</option>
                    {
                        categories.map(c => <option name="categories" value={c.id}>{c.type}</option>)
                    }
                </select>
            </div>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const game = {
                        title: currentGame.title,
                        description: currentGame.description,
                        designer: currentGame.designer,
                        year_released: parseInt(currentGame.year_released),
                        num_of_players: parseInt(currentGame.num_of_players),
                        estimated_time: parseInt(currentGame.estimated_time),
                        age: parseInt(currentGame.age),
                        categories: selectedCat
                    }
                    {
                        gameId ? 
                            updateGame(game, gameId)
                                .then(() => history.push('/games'))
                            : createGame(game)
                                .then(() => history.push("/games"))
                    }
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}