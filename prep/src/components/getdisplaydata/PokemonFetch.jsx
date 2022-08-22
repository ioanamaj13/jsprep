import { useEffect, useState } from "react";

export const PokemonFetch = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemons = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await res.json();
            setPokemons(data.results);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    console.log(pokemons);

    if (!pokemons) {
        return;
    }

    return (
        <div>
            {loading ? <p>Loading...</p> : null}
            {error ? <p>{error}</p> : null}
            <div className="infiniteScroll">
                {pokemons.length ? pokemons.map((pokemon, index) => {
                    return <p key={index}>{pokemon.name}</p>
                }) : null}
            </div>
        </div>
    )
}