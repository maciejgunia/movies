import { FC, useRef } from "react";
import "./Search.scss";
import debounce from "lodash/debounce";

interface SearchProps {
    onQueryChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ onQueryChange }) => {
    const element = useRef<any>(null);
    const emitValue = debounce(() => {
        onQueryChange(element.current.value);
    }, 500);

    return <input className="search" ref={element} onChange={emitValue} type="text"></input>;
};
