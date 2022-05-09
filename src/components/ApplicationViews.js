import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameDetails } from "./game/GameDetails.js"
import { GameForm } from "./game/GameForm.js"



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

            <Route exact path="/games/new">
                <GameForm editing={false} />
            </Route>
            <Route exact path="/games/edit/:gameId(\d+)">
                <GameForm editing={true} />
            </Route>

        </main>
    </>
}