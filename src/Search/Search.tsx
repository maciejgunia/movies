import { FC } from "react";
import "./Search.scss";

interface SearchProps {
    query: string;
    onQueryChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ query, onQueryChange }) => {
    return <input className="search" value={query} onChange={(e) => onQueryChange(e.target.value)} type="text"></input>;
};
