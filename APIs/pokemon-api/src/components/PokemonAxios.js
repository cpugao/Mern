import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807/')
            .then(response => { 
                setPokemon(
                    response.data.results
                )
            })
    };

    return (
        <div>
           <button onClick={onClick}>Fetch Pokemon con Axios</button>
           {pokemon.map((index, i) => {
               return (
                   <p key={i}>{index.name}</p>
               )
           })}
        </div>
    );
}

export default PokemonAxios;