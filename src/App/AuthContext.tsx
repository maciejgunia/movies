import React, { Dispatch } from "react";
import { FavState } from "../App/App";

const AuthContext = React.createContext<{
    isUserLoggedIn: boolean;
    loginHandler: () => void;
    state: FavState;
    dispatch: Dispatch<any>;
}>({
    isUserLoggedIn: false,
    state: { favourite: [] },
    loginHandler: () => {},
    dispatch: () => {}
});
export default AuthContext;
