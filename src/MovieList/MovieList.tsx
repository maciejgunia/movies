import { debounce } from "lodash";
import { FC, useState } from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";

import "./MovieList.scss";

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

export const MovieList: FC = () => {
    const [movies, setMovies] = useState<MovieData[]>([]);

    const fetchData = debounce((query) => {
        const key = "e67d3709101fb0772be92546b4c8e480";

        if (query.length === 0) {
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, 500);

    return (
        <div>
            <Search onQueryChange={fetchData} />
            <div className="movie__list">
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <Movie key={id} title={title} cover={poster_path} vote={vote_average} />
                ))}
            </div>
        </div>
    );
};
