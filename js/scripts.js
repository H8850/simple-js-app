
let pokemonRepository = (function () {
  let pokemonList = [
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add:add,
    getAll: getAll
  };

})();

//forEach to print pokemon

pokemonRepository.getAll().forEach(function(pokemon){
document.write(pokemon.name + ' is ' + pokemon.height + ' meters tall' + '<br />');
})
