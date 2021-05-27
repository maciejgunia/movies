import { useState } from "react";
import Login from "../Login/Login";
import { MovieList } from "../MovieList/MovieList";
import AuthContext from "./AuthContext";

const App = () => {
    const [isUserLoggedIn, setLoggedInStatus] = useState(false);

    const loginHandler = () => {
        setLoggedInStatus(!isUserLoggedIn);
    };

    return (
        <AuthContext.Provider value={{ isUserLoggedIn, loginHandler }}>
            <Login />
            <MovieList />
        </AuthContext.Provider>
    );
};
export default App;
