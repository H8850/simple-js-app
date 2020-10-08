
//Main Group
let pokemonRepository = (function () {
  //Array for pokemon data
  let repository = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Charmander', height: 0.6, type: ['Fire']},
    {name: 'Squirtle', height: 0.5, type: ['Water']},
    {name: 'Caterpie', height: 0.3, type: ['Bug']},
    {name: 'Weedle', height: 0.3, type: ['Bug', 'Poison']},
    {name: 'Pidgey', height: 0.3, type: ['Flying', 'Normal']},
    {name: 'Rattata', height: 0.3, type: ['Normal']},
    {name: 'Ekans', height: 0.2, type: ['Poison']},
    {name: 'Moltres', height: 2, type: ['Fire', 'Flying']},
  ];
  //Function to add additional pokemon
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
        repository.push(pokemon);} else {
      console.log("pokemon is not correct");
    }
  }
  // function to get the complete pokemon list
  function getAll() {
    return repository;
  }
  //function to create list of buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    // adding pokemon buttons
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    //adding a listener to each button
    let button = document.querySelector("button");
    button.addEventListener("click", showDetails (pokemon) {
      console.log(pokemon)
    )};
  }
  //function for event listener on each pokemon button
  function showDetails(pokemon) {
   console.log(pokemon);
  }
  // returns
  return {
    add:add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();
pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["Electric"]});
console.log(pokemonRepository.getAll());
// forEach loop that calls the complete pokemon list
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
