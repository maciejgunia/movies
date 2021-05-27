import { FC, useContext } from "react";
import AuthContext from "../App/AuthContext";
import Sticker from "../Sticker/Sticker";
import FavButton from "../FavButton/FavButton";
import "./Movie.scss";

interface MovieProps {
    id: number;
    title: string;
    cover: string;
    vote: number;
}

export const Movie: FC<MovieProps> = ({ id, title, cover, vote }) => {
    const auth = useContext(AuthContext);

    return (
        <div className="movie">
            {cover ? (
                <img
                    className="movie__cover"
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${cover}`}
                    alt=""
                />
            ) : (
                <img className="movie__cover" src="https://via.placeholder.com/220x330?text=no image" alt="" />
            )}
            <p className="movie__title">{title}</p>
            <div className="movie__vote">
                <Sticker>{vote.toFixed(1)}</Sticker>
            </div>
            {auth.isUserLoggedIn && (
                <div className="movie__fav-button">
                    <FavButton id={id} />
                </div>
            )}
        </div>
    );
};
