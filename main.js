
const input = document.getElementById("nome");

const button = document.getElementById("pesquisa");
const pokemon = []






button.addEventListener("click", function() {
  
 
  input.value = input.value.toLowerCase();
  input.value = input.value.trim().replace(/\s+/g, '-');
  input.value = input.value.trim();

  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(searchTerm);

 
fetch(url, {
  headers: {
    'language': 'pt-BR'
  }
  })
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
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <h2 class="card-title">${pokemon.name}</h2>
                      </div>
                      <div class="col">
                        <h3 class="numero">#${pokemon.number}</h3>
                      </div>
                    </div>
                  </div>
                  <ul class="types">
                    ${pokemon.types.map((type) => `<li class="type${type}">${type}</li>`).join('')}
                  </ul> 
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <p class="card-text">peso: ${pokemon.weight} lbs.</p>
                      </div>
                      <div class="col">
                        <p class="card-text">altura: ${pokemon.height} ft.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        ${pokemon.stats.map((stat) => `<p class="poder">${stat}:</p>`).join('')}
                      </div>
                      <div class="col">
                        ${pokemon.stat.map((stat) => `<p class="valor">${stat}</p>`).join('')}
                      </div>

                    </div>
                </div>                      
                

            </div>    
      </div>
          


      `;
      document.body.appendChild(newDiv);
    
    })
    
    .catch(error => {console.error(error)});
    input.value = '';
    
    
})
