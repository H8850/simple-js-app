let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){"object"==typeof e&&"name"in e?t.push(e):document.write("This pokemon is not correct")}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.name=e.name,t.imageUrl=e.sprites.other.dream_world.front_default,t.height=e.height,t.weight=e.weight,t.types=e.types,t.abilities=e.abilities}).catch(function(t){console.error(t)})}function i(t){o(t).then(()=>{a(t)})}function a(t){let e=$(".modal-body"),n=$(".modal-header"),o=$(".modal-title"),i=$("#btnClose");$("#modal-container").modal("show"),n.empty(),o.empty(),e.empty();let a=$("<h3>"+t.name+"</h3>"),l=$('<img class="modal-img">');l.attr("src",t.imageUrl);let c=$("<p>Height : "+t.height+" dm </p>"),r=$("<p>Weight : "+t.weight+" hg </p>"),p=document.createElement("p");t.types.forEach(function(e,n){t.types.length-2==n?p.textContent+="Type : "+e.type.name+", ":p.textContent+="Type : "+e.type.name});let s=document.createElement("p");t.abilities.forEach(function(e,n){t.abilities.length-1==n?s.textContent+="Ability : "+e.ability.name:s.textContent+="Ability : "+e.ability.name+", "}),n.append(a),e.append(l),e.append(p),e.append(c),e.append(r),e.append(s),n.append(i)}return document.querySelector("button").addEventListener("click",()=>{a()}),{add:n,getAll:function(){return t},addListPokemon:function(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("li"),o=document.createElement("button");e.append(n),n.append(o),o.innerText=t.name,o.classList.add("btn"),o.classList.add("btn-light"),o.classList.add("button-list"),o.addEventListener("click",function(){i(t)})},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListPokemon(t)})});