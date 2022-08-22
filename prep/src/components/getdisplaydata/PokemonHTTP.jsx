import { useEffect, useState } from "react";

export const PokemonHTTP = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPokemons = async () => {
        const requst = new XMLHttpRequest();
        requst.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=151", false);
        requst.send(null);
        return requst.responseText;
    }

    useEffect(() => {
        fetchPokemons().then(data => {
            setPokemons(JSON.parse(data).results);
            setLoading(false);
        }).catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

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