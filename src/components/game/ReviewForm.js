import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createReview, createRating } from './GameManager.js'


export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [newReview, setNewReview] = useState({
        game_id: gameId,
        player_id: parseInt(localStorage.getItem('gr_token')),
        review: ""
    })

    const [newRating, setNewRating] = useState({
        gameId: gameId,
        playerId: parseInt(localStorage.getItem('gr_token')),
        rating: 0
    })

    const handleControlledInputChange = (event) => {
        const review = Object.assign({}, newReview)
        review[event.target.name] = event.target.value
        setNewReview(review)
    }

    const handleRatingInput = (event) => {
        const rating = Object.assign({}, newRating)
        rating[event.target.name] = event.target.value
        setNewRating(rating)
    }


    return (
        <form className="reviewForm">
            <h2>Add Review</h2>
            <fieldset>
                <div className="form-group">
                    <label>Review: </label>
                    <textarea type="text" name="review" required
                        value={newReview.review}
                        onChange={handleControlledInputChange}></textarea>
                </div>
            </fieldset>
            <h4>Rate this Game:</h4>
            <div>
                <select type="integer" name="rating" className="form-control"
                    placeholder="Rating"
                    defaultValue="Rate"
                    onChange={handleRatingInput}>
                    <option name="rating" value={1}>1</option>
                    <option name="rating" value={2}>2</option>
                    <option name="rating" value={3}>3</option>
                    <option name="rating" value={4}>4</option>
                    <option name="rating" value={5}>5</option>
                    <option name="rating" value={6}>6</option>
                    <option name="rating" value={7}>7</option>
                    <option name="rating" value={8}>8</option>
                    <option name="rating" value={9}>9</option>
                    <option name="rating" value={10}>10</option>
                </select>
            </div>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const review = {
                        game_id: gameId,
                        player_id: parseInt(localStorage.getItem('gr_token')),
                        review: newReview.review
                    }
                    const rating = {
                        game_id: gameId,
                        player_id: parseInt(localStorage.getItem('gr_token')),
                        rating: parseInt(newRating.rating)
                    }
                    createRating(rating)
                    createReview(review)
                        .then(() => history.push("/games"))
                }}
                className="btn btn-primary">Submit</button>
        </form>
    )


}