

const pokemonList = document.getElementById('pokemonList')
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
      console.log(jsonBody)
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
      pokemon.photo2 = jsonBody.sprites.other["official-artwork"].front_shiny
      pokemon.weight = jsonBody.weight
      pokemon.height = jsonBody.height    

      console.log(pokemon)

      const newDiv = 
      `
      <div id="pokemonMod" class="pokemon">
        <div ${pokemon.types.map((type) => `class="card ${type}"`)} style="width: 18rem;">
            <img src="${pokemon.photo}" alt="${pokemon.name}" onerror="this.onerror=null;this.src='${pokemon.photo2}';">
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
      pokemonList.innerHTML = newDiv

    fetch(urlevo)
    .then((response) => response.json())
    .then(json2Body => {
      const cadeiaDeEvo = json2Body.evolution_chain.url

      fetch(cadeiaDeEvo)
      .then((response) => response.json())
      .then(json3Body => {
        console.log(json3Body)

        const especies = json3Body.chain.evolves_to
        pokemon.especies = especies
                
        for (const item of especies) {
          pokemon.evolutions.push(item.species.name)
         
        }
        
        const especies2 = json3Body.chain.species.name
        const especies3 = json3Body.chain.evolves_to[0].evolves_to[0].species.name
        
        pokemon.evolutions.push(especies2,especies3)
        pokemon.evolutions = pokemon.evolutions.filter(valor => valor !== `${pokemon.name}`);

        console.log(pokemon.evolutions)

        for (const pk of pokemon.evolutions) {
                    
          fetch(`https://pokeapi.co/api/v2/pokemon/${pk}`)
          .then((response) => response.json())
          .then(json4Body => {
            const pokemons = new Pokemons()
            pokemons.numbers = json4Body.id
            pokemons.names = json4Body.name
            pokemons.photos = json4Body.sprites.other.dream_world.front_default
            pokemons.photos2 = json4Body.sprites.other["official-artwork"].front_shiny
            const types2 = jsonBody.types.map((typeSlot) => typeSlot.type.name)
            const [type2] = types2

            pokemons.types2 = types2
            pokemons.type2 = type2

            console.log(pokemons)  
            const newpk =`
            
            <div id="evos" ${pokemons.types2.map((type2) => `class="card ${type2}"`)} >
              <img id="imgevo"src="${pokemons.photos}" class="card-img-top" alt="${pokemons.names}" onerror="this.onerror=null;this.src='${pokemons.photos2}';">
              <div class="card-body">
              <div class="container text-center">
                <div class="row">
                  <div class="col">
                    <h2 id="numeroevo">#${pokemons.numbers}</h2>
                  </div>
                  <div class="col">
                    <h2 id="nomeevo">${pokemons.names}</h2>
                  </div>
                </div>
              </div>
            </div>
            `
            evo.innerHTML += newpk
        })}
        evo.innerHTML = "";

        
        
       
     })
      
             
   
})
    
    })
    .catch(error => {console.error(error)});
    input.value = '';
          
})

