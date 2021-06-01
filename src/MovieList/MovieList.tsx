import { FC, useEffect, useState } from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";

import { useDebounce } from "use-debounce";

import "./MovieList.scss";

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

const MovieList: FC = () => {
    const key = "e67d3709101fb0772be92546b4c8e480";
    const [query, setQuery] = useState<string>("");
    const [movies, setMovies] = useState<MovieData[]>([]);
    const [debouncedQuery] = useDebounce(query, 500);

    useEffect(() => {
        if (debouncedQuery.length === 0) {
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${debouncedQuery}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [debouncedQuery]);

    return (
        <div>
            <Search query={query} onQueryChange={setQuery} />
            <div className="movie__list">
                {movies.map(({ id, title, poster_path, vote_average }) => (
                    <Movie key={id} id={id} title={title} cover={poster_path} vote={vote_average} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
