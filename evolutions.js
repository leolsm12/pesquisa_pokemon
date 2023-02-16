const Evolucoes = pokemon.evolucoes
console.log(Evolucoes)

const evo = `https://pokeapi.co/api/v2/pokemon/${Evolucoes}`
fetch(evo)
    .then((response) => response.json())
    .then(jsonBody => {
      console.log(jsonBody)

    })



// const evolucoes = 
// `

//   <div ${pokemon.types.map((type) => `class="card ${type}"`)} style="width: 18rem;">
//       <img src="${pokemon.photo}" alt="${pokemon.name}" onerror="this.onerror=null;this.src='${pokemon.photo2}';">
//       <div class="card-body">
//         <div class="container text-center">
//           <div class="row">
//             <div class="col">
//               <h2 id="nom" class="card-title">${pokemon.name}</h2>
//             </div>
//             <div class="col">
//               <h3 id="nom" class="numero">#${pokemon.number}</h3>
//             </div>
//           </div>
//         </div>
//         <ul class="types">
//           ${pokemon.types.map((type) => `<li id="letras" class="type${type}">${type}</li>`).join('')}
//         </ul> 
//         <div class="container text-center">
//           <div class="row">
//             <div class="col">
//               <p id="letras"class="card-text">peso: ${pokemon.weight} lbs.</p>
//             </div>
//             <div class="col">
//               <p id="letras" class="card-text">altura: ${pokemon.height} ft.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="status">
//         <div class="container text-center">
//           <div class="row">
//             <div id="letras" class="col">
//               ${pokemon.stats.map((stat) => `<p class="poder">${stat}:</p>`).join('')}
//             </div>
//             <div id="letras" class="col">
//               ${pokemon.stat.map((stat) => `<p class="valor">${stat}</p>`).join('')}
//             </div>
//           </div>
//       </div>                      
//   </div>    
// </div>

// `;
// pokemonList.innerHTML = evolucoes