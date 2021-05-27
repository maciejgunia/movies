import { useContext } from "react";
import AuthContext from "../App/AuthContext";

const Login = () => {
    const auth = useContext(AuthContext);
    return <button onClick={auth.loginHandler}>{auth.isUserLoggedIn ? "Logout" : "Login"}</button>;
};

export default Login;
