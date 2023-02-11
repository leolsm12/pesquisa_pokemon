
const input = document.getElementById("nome");
const button = document.getElementById("pesquisa");

button.addEventListener("click", function() {
  const searchTerm = input.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
  console.log(url);

  
fetch(url)
    .then((response) => response.json())
    .then(jsonBody => {(jsonBody)})
           
    .catch(error => {console.error(error)})
    

class pokemon {
  constructor(name, weight, height) {
      this.name = name;
      this.weight = weight;
      this.height = height;
  }
}

let user = new Pokemon(
  jsonBody.name,
  jsonBody.weight,
  jsonBody.height
);

console.log(user);
})
// let name = jsonBody["name"];
// let weight = jsonBody["weight"];
// let height = jsonBody["height"];
