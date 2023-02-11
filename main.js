class Pokemon {
  number ;
  name ;
  type;
  types = [];
  photo;
  evolutions = []; 
  weight;
  height;
  stats = [];
  stat =[];
}



const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");
const pokemon = []

button.addEventListener("click", function() {
  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(url);

  
fetch(url)
    .then((response) => response.json())
    .then(jsonBody => {
      const pokemon = new Pokemon()
      pokemon.number = jsonBody.id
      pokemon.name = jsonBody.name

      const stats = jsonBody.stats.map((statsBase_stat) => statsBase_stat.stat.name)
      const stat = jsonBody.stats.map((statsBase_stat) => statsBase_stat.base_stat)
      const types = jsonBody.types.map((typeSlot) => typeSlot.type.name)
      const evolutions = jsonBody.forms.map((formsName) => formsName.url)
    
      const [type] = types
      pokemon.evolutions = evolutions

      pokemon.stat = stat
      pokemon.stats = stats

      pokemon.types = types
      pokemon.type = type
      pokemon.photo = jsonBody.sprites.other.dream_world.front_default
      pokemon.weight = jsonBody.weight
      pokemon.height = jsonBody.height

      console.log(pokemon)

  
    })
    .catch(error => {console.error(error)})
    
    


    
})
