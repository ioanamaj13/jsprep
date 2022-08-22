import { PokemonFetch } from "../../components/getdisplaydata/PokemonFetch"


export const PokemonFetchPage = () => {
    return (
        <div>
            <div className="fixedHeader">
                <h1>PokemonFetch</h1>
            </div>
            <div className="paddedContent">
                <PokemonFetch />
            </div>
        </div>
    )
}