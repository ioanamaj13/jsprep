import { PokemonHTTP } from "../../components/getdisplaydata/PokemonHTTP"

export const PokemonHttpPage = () => {
    return (
        <div>
            <div className="fixedHeader">
                <h1>Pokemon HTTP</h1>
            </div>
            <div className="paddedContent">
                <PokemonHTTP />
            </div>
        </div>
    )
}