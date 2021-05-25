import { FC, useState } from "react";
import "./Search.scss";

interface SearchProps {
    onQueryChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onQueryChange }) => {
    const [query, setQuery] = useState("");

    const queryHandler = (value: string) => {
        onQueryChange(value);
        setQuery(value);
    };

    return <input className="search" value={query} onChange={(e) => queryHandler(e.target.value)} type="text"></input>;
};
