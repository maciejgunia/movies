import { useReducer, useState } from "react";
import Login from "../Login/Login";
import { MovieList } from "../MovieList/MovieList";
import AuthContext from "./AuthContext";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "../Details/Details";
import ErrorPage from "../404/404";

export interface FavState {
    favourite: number[];
}

const reducer = (state: FavState, { type, payload }: any) => {
    if (type === "ADD") {
        const newFav = [...state.favourite, payload];
        return { ...state, favourite: newFav };
    }

    if (type === "REMOVE") {
        const newFav = state.favourite.filter((i) => i !== payload);
        return { ...state, favourite: newFav };
    }

    return state;
};

const App = () => {
    const [isUserLoggedIn, setLoggedInStatus] = useState(false);
    const [state, dispatch] = useReducer(reducer, { favourite: [] });

    const loginHandler = () => {
        setLoggedInStatus(!isUserLoggedIn);
    };

    return (
        <AuthContext.Provider value={{ isUserLoggedIn, loginHandler, state, dispatch }}>
            <Router>
                <Link to="/">Home</Link>
                <Login />
                <Switch>
                    <Route exact path="/">
                        <MovieList />
                    </Route>
                    <Route path="/movie/:id" children={<Details />}></Route>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    );
};
export default App;
