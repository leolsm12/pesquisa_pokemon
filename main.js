
const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");

button.addEventListener("click", function() {
  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(url);

  
  if(searchTerm == ''){
    fetch(url)
    .then((response) => response.json())
    .then(jsonBody => jsonBody.results)
    .then((pokemons) => pokemons.map((getPokemonDetail)))
    .catch(error => {console.error(error)})
  }else {
    fetch(url)
    .then((response) => response.json())
    .then(jsonBody => jsonBody)
    .then(response => console.log(response))
    .catch(error => {console.error(error)})
  }



})

getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
      .then((response) => response.json())
      .then((covertPokeApiDetailToPokemon => console.log(covertPokeApiDetailToPokemon)))
};