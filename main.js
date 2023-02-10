
const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");

button.addEventListener("click", function() {
  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(url);

  
fetch(url)
    .then((response) => response.json())
    .then(jsonBody => jsonBody.results)
    .then((pokemons) => pokemons.map((pokeApi.getPokemonDetail))) 
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)

     
    
    .catch(error => {console.error(error)})
    console.log(pokemonsDetails)
})
