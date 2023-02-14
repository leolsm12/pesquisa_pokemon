
const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");
const pokemon = []

button.addEventListener("click", function() {  
 
  input.value = input.value.toLowerCase();
  input.value = input.value.trim().replace(/\s+/g, '-');
  input.value = input.value.trim();

  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`; 
  console.log(url)
 
fetch(url)
    .then((response) => response.json())
    .then(jsonBody => {
      const pokemon = new Pokemon()
      pokemon.number = jsonBody.id
      pokemon.name = jsonBody.name

      const stats = jsonBody.stats.map((statsBase_stat) => statsBase_stat.stat.name)
      const stat = jsonBody.stats.map((statsBase_stat) => statsBase_stat.base_stat)
      const types = jsonBody.types.map((typeSlot) => typeSlot.type.name)

      const [type] = types

      const urlevo = jsonBody.species.url     

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
            <div ${pokemon.types.map((type) => `class="card ${type}"`)} style="width: 18rem;">
                <img src="${pokemon.photo}" alt="${pokemon.name}" onerror="this.onerror=null;this.src='img/Logo-Pokebola-Pokémon-PNG.png';">
                <div class="card-body">
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <h2 id="nom" class="card-title">${pokemon.name}</h2>
                      </div>
                      <div class="col">
                        <h3 id="nom" class="numero">#${pokemon.number}</h3>
                      </div>
                    </div>
                  </div>
                  <ul class="types">
                    ${pokemon.types.map((type) => `<li id="letras" class="type${type}">${type}</li>`).join('')}
                  </ul> 
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <p id="letras"class="card-text">peso: ${pokemon.weight} lbs.</p>
                      </div>
                      <div class="col">
                        <p id="letras" class="card-text">altura: ${pokemon.height} ft.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="status">
                  <div class="container text-center">
                    <div class="row">
                      <div id="letras" class="col">
                        ${pokemon.stats.map((stat) => `<p class="poder">${stat}:</p>`).join('')}
                      </div>
                      <div id="letras" class="col">
                        ${pokemon.stat.map((stat) => `<p class="valor">${stat}</p>`).join('')}
                      </div>

                    </div>
                </div>                      
                

            </div>    
      </div>
          


      `;
      document.body.appendChild(newDiv);

      fetch(urlevo)
    .then((response) => response.json())
    .then(json2Body => {
      const cadeiaDeEvo = json2Body.evolution_chain.url

      fetch(cadeiaDeEvo)
      .then((response) => response.json())
      .then(json3Body => {
        
        const evolutions1 = json3Body.chain.evolves_to[0].species.name
        const evolutions2 = json3Body.chain.evolves_to[0].evolves_to[0].species.name
        const evolutions3 = json3Body.chain.species.name
       
        pokemon.evolutions = [evolutions1 , evolutions2 , evolutions3]
        
       

      })
})
       
    })
    .catch(error => {console.error(error)});
    input.value = '';
          
})
