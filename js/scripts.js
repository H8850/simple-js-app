//second task
let pokemonList = [
  {name: 'Bulbasaur', height: 7, type: ['Grass', 'Poison']},
  {name: 'Charmander', height: 6, type: ['Fire']},
  {name: 'Squirtle', height: 5, type: ['Water']},
  {name: 'Caterpie', height: 3, type: ['Bug']},
  {name: 'Weedle', height: 3, type: ['Bug', 'Poison']},
  {name: 'Pidgey', height: 3, type: ['Flying', 'Normal']},
  {name: 'Rattata', height: 3, type: ['Normal']},
  {name: 'Ekans', height: 2, type: ['Poison']},
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name);
}
