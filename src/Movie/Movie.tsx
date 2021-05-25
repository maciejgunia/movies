import { FC } from "react";
import "./Movie.scss";

interface MovieProps {
    title: string;
    cover: string;
    vote: number;
}

export const Movie: FC<MovieProps> = ({ title, cover, vote }) => {
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
            <p className="movie__vote">{vote.toFixed(1)}</p>
        </div>
    );
};
