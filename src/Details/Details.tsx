import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";

const Details: FC = () => {
    const key = "e67d3709101fb0772be92546b4c8e480";
    const { id } = useParams<Record<string, string>>();
    const [movie, setMovie] = useState<Record<string, string>>({});

    useEffect(() => {
        if (typeof id === "undefined") {
            return;
        }

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });
    }, [id]);

    return <p>{movie?.title}</p>;
};

export default Details;
