
const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");

button.addEventListener("click", function() {
  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(url);

  
fetch(url)
    .then((response) => response.json())
    .then(jsonBody => {console.log(jsonBody)})
      

     
    
    .catch(error => {console.error(error)})
})
    