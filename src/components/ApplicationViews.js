import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameDetails } from "./game/GameDetails.js"
import { GameForm } from "./game/GameForm.js"
import { ReviewForm } from "./game/ReviewForm.js"



export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>

<Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/:gameId">
                <GameDetails />
            </Route>
            <Route path="/game/new">
                <GameForm />
            </Route>
            <Route exact path="/game/edit/:gameId">
                <GameForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            {/* 
            <Route exact path="/games/upload_image/:gameId">
                <ImageForm />
            </Route> */}

        </main>
    </>
}