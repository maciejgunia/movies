import { FC, useContext } from "react";
import AuthContext from "../App/AuthContext";
import Sticker from "../Sticker/Sticker";

const FavButton: FC<{ id: number }> = ({ id }) => {
    const { state, dispatch } = useContext(AuthContext);

    return (
        <>
            {state.favourite.includes(id) ? (
                <div onClick={() => dispatch({ type: "REMOVE", payload: id })}>
                    <Sticker>
                        <i className="fas fa-times"></i>
                    </Sticker>
                </div>
            ) : (
                <div onClick={() => dispatch({ type: "ADD", payload: id })}>
                    <Sticker>
                        <i className="fas fa-check"></i>
                    </Sticker>
                </div>
            )}
        </>
    );
};

export default FavButton;
