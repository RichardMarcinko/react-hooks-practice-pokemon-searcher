import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeArr}) {
  const mappedPokeArr = pokeArr.map((pokeObj) => {
    return (
    // console.log(pokeObj)
    <PokemonCard 
      key = {pokeObj.id}
      name = {pokeObj.name}
      hp = {pokeObj.hp}
      sprites = {pokeObj.sprites}
      />
  )
  })
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {mappedPokeArr}
    </Card.Group>
  );
}

export default PokemonCollection;






























// import React from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// //Write function to map data for each Pokemon from PokemonPage (when filter function is written rewrite map to replace pokemonArray with filteredPokemonArray)
// //console.log pokemon in map function to see pokemon data ()
// //see lecture two Characters.js lines 39-52 (keep eye out for fragment tags - very important)


// function PokemonCollection({filteredPokeArr}) {
//   const mappedPokeArr = filteredPokeArr.map((pokeObj) => {
//     // console.log(pokeObj)
//     return (
//     <PokemonCard 
//     key = {pokeObj.id}
//     name = {pokeObj.name}
//     hp = {pokeObj.hp}
//     sprites = {pokeObj.sprites}
//     />
//     )
//   })
  
//   return (
//     <Card.Group itemsPerRow={6}>
//       {/* <h1>Hello From Pokemon Collection</h1> */}
//       {mappedPokeArr}
    

//     </Card.Group>
//   );
// }

// export default PokemonCollection;
