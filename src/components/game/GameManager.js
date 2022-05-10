export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(game)
    })
        .then(res => res.json())
}

export const uploadImage = (image) => {
    return fetch("http://localhost:8000/images", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(image)
    })
        .then(res => res.json())
}

export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(review)
    })
        .then(res => res.json())
}

export const createRating = (rating) => {
    return fetch("http://localhost:8000/ratings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(rating)
    })
        .then(res => res.json())
}

export const getReviews = () => {
    return fetch(`http://localhost:8000/reviews`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteGame = (id) => {
    return fetch(`http://127.0.0.1:8000/games/${id}`, { 
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }})
}

export const getGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
        .then(res => res.json())
}

export const updateGame = (game, gameId) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    })
}

export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const getGameCategories = () => {
    return fetch("http://localhost:8000/game_categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const getGameRatings = () => {
    return fetch("http://localhost:8000/ratings", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const createCats = (cats) => {
    return fetch("http://localhost:8000/game_categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(cats)
    })
        .then(res => res.json())
}  