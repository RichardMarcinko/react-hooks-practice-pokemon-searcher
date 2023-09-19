import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeArr, setPokeArr] = useState([])
  const [searchPoke, setSearchPoke] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(data => setPokeArr(data))
  }, [])

  const filteredPokeArr = pokeArr.filter((pokeObj) => {
    // console.log(pokeObj)
    return (
      pokeObj.name.toLowerCase().includes(searchPoke.toLowerCase())
    )
  })


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearchPoke={setSearchPoke} />
      <br />
      <PokemonCollection pokeArr={filteredPokeArr} />
    </Container>
  );
}

export default PokemonPage;

























// import React, {useState, useEffect} from "react";
// import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
// import Search from "./Search";
// import { Container } from "semantic-ui-react";



// //Write Fetch here (needs to be at lowest point where all components still available, except App) (in CC go straight to App)
// //Fetch requires State
// //Write Search State here see Lecture 4 App.js line 10 (use that syntax)
// //useState destructures what is being called into a variable and a function. Then call variable or function to what needs it.
// //See Search.js for next step on Search deliverable
// //Write filter function (see lecture 4 characters.js line 8) (filter should be written to be above previous map function)
// //Go to PokemonForm and wire it up (see lecture 4 NewCharacter.js). Pass setState function from fetch


// function PokemonPage() {
//   const [pokeArr, setPokeArr] = useState([])
//   const [searchPoke, setSearchPoke] = useState("")

 

//   // useEffect(() => {
//   //   fetch('http://localhost:3001/pokemon')
//   //     .then((resp) => resp.json())
//   //     .then((data) => console.log(data))
//   // }, [])

//   useEffect(() => {
//     fetch("http://localhost:3001/pokemon")
//         .then((resp) => resp.json())
//         .then((data) => setPokeArr(data))
//   }, [])

// const filteredPokeArr = pokeArr.filter((pokeObj) => {
//   return pokeObj.name.toLowerCase().includes(searchPoke.toLowerCase())
// })

//   return (
//     <Container>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <PokemonForm />
//       <br />
//       <Search setSearchPoke={setSearchPoke} /> {/*pass function to setSearchState as a prop from Search state below line 10*/}
//       <br />
//       <PokemonCollection filteredPokeArr={filteredPokeArr} />
//     </Container>
//   );
// }

// export default PokemonPage;
