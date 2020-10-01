//second task
let pokemonList = [
  {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
  {name: 'Charmander', height: 0.6, type: ['Fire']},
  {name: 'Squirtle', height: 0.5, type: ['Water']},
  {name: 'Caterpie', height: 0.3, type: ['Bug']},
  {name: 'Weedle', height: 0.3, type: ['Bug', 'Poison']},
  {name: 'Pidgey', height: 0.3, type: ['Flying', 'Normal']},
  {name: 'Rattata', height: 0.3, type: ['Normal']},
  {name: 'Ekans', height: 0.2, type: ['Poison']},
];

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name +
                                " (" +
                                pokemonList[i].height +
                                " meters tall)" +
                                ("<br />") );
}
