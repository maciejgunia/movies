import { debounce } from "lodash";
import React from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";

import "./MovieList.scss";

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

interface MovieListState {
    query: string;
    movies: MovieData[];
}

export class MovieList extends React.Component {
    state: MovieListState = { query: "", movies: [] };
    key = "e67d3709101fb0772be92546b4c8e480";

    constructor(props: any) {
        super(props);
        this.changeQuery = this.changeQuery.bind(this);
        this.fetchData = debounce(this.fetchData.bind(this), 500);
    }

    fetchData() {
        if (this.state.query.length === 0) {
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${this.state.query}`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ...this.state, movies: data.results });
            });
    }

    changeQuery(query: string) {
        this.setState((prevState) => ({ ...prevState, query }), this.fetchData);
    }

    render() {
        return (
            <div>
                <Search query={this.state.query} onQueryChange={this.changeQuery} />
                <div className="movie__list">
                    {this.state.movies.map(({ id, title, poster_path, vote_average }) => (
                        <Movie key={id} title={title} cover={poster_path} vote={vote_average} />
                    ))}
                </div>
            </div>
        );
    }
}
