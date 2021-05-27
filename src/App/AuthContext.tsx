import React from "react";

const AuthContext = React.createContext<{ isUserLoggedIn: boolean; loginHandler: () => void }>({
    isUserLoggedIn: false,
    loginHandler: () => {}
});
export default AuthContext;
