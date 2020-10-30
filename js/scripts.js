
//Main Group
let pokemonRepository = (function () {
  //Array for pokemon data
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to add additional pokemon
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // function to get the complete pokemon list
  function getAll() {
    return pokemonList;
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
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

// function to load the list of pokemon
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

// function to load list item details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //this code adds the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

// function to log the details of the item selected
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // returns
  return {
    add:add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//calling functions to load the list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

////functions to show the modal in the browser

function showModal(name, img, height) {

  let modalContainer = document.querySelector("#modal-container");
  //clear existing content
  modalContainer.innerHTML = '';

  //define the modal
  let modal = document.createElement('div');
  modal.classList.add('modal');

  // modal content

  // close button
  let closeButtonElement = document.createElement('button'); //creates the button
  closeButtonElement.classList.add('modal-close'); //adds class to button
  closeButtonElement.innerText = 'Close'; //adds text to button
  closeButtonElement.addEventListerner('click', hideModal); //listener to close modal on click of button

  //pokemon name
  let nameElement = document.createElement('h1');
  titleElement.innerText = item.name;

  //pokemon image
  let imgElement = document.createElement('div');
  contentElement.inner = item.imgUrl;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(imgElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

//function to hide the modal
function hideModal() {
  modalContainer.classList.remove('is-visible');
}

document.querySelector('#show-modal')
.addEventListern('click', () => {
  showModal('');
})
