import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const onClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(
                    response.results
                )
            })
    };

    return (
        <div>
           <button onClick={onClick}>Fetch Pokemon</button>
           {pokemon.map((index, i) => {
               return (
                   <p key={i}>{index.name}</p>
               )
           })}
        </div>
    );
}

export default Pokemon;