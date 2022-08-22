import { PokemonAxios } from "../../components/getdisplaydata/PokemonAxios";



export const PokemonAxiosPage = () => {
    return (
        <div>
            <div className="fixedHeader">
                <h1>PokemonAxios</h1>
            </div>
            <div className="paddedContent">
                <PokemonAxios />
            </div>
        </div>
    )
}