



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

      const newDiv = document.createElement('div');
      newDiv.innerHTML = 
      `
      <div id="pokemonMod" class="pokemon">
            <div class="card" style="width: 18rem;">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <div class="card-body">
                  <h5 class="card-title">${pokemon.name}</h5>
                  <h2 class="numero">#${pokemon.number}</h2>
                    <ol class="types">
                      ${pokemon.types.map((type) => `<li class="type${type}">${type}</li>`).join('')}
                    </ol> 
                    <p class="card-text">peso${pokemon.weight}</p>
                    <p class="card-text">altura${pokemon.height}</p>
                </div>
                <div class="status">
                  <div class="ata">
                   ${pokemon.stats.map((stat) => `<p>${stat}</p>`).join('')}
                  </div>
                  <div class="pontos">
                    ${pokemon.stat.map((stat) => `<p>${stat}</p>`).join('')}
                  </div>                
                </div>

            </div>    
      </div>       


      `;
      document.body.appendChild(newDiv);

  
    })
    .catch(error => {console.error(error)})
    
    
})
