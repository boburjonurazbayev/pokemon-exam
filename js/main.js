// Get elements
var elPokemonForm = document.querySelector(".pokemon__form");
var elPokemonImage = document.querySelector(".pokemon__image");
var elPokemonName = document.querySelector(".pokemon__name");
var elPokemonSpecialization = document.querySelector(".pokemon__specialization");
var elPokemonWeight = document.querySelector(".pokemon__weight");
var elPokemonHeight = document.querySelector(".pokemon__height");
var elPokemonResult = document.querySelector(".pokemon__list");

function renderPokemon(_pokemons, element) {
    element.innerHTML = null;
  for (var i = 0; i < _pokemons.length; i++) {

    //   Create elements
    var newLi = document.createElement("li");
    var newImg = document.createElement("img");
    var newHeading = document.createElement("h2");
    var newParagraph = document.createElement("p");
    var newSpanBox = document.createElement("span");
    var newSpanWeight = document.createElement("span");
    var newSpanHeight = document.createElement("span");

    // Set attributes
    newLi.setAttribute("class", "pokemon-card border border-dark border-2 bg-white position-relative");
    newImg.setAttribute("class", "pokemon-card__image");
    newImg.setAttribute("src", _pokemons[i].img);
    newImg.setAttribute("alt", _pokemons[i].name + "`s image");
    newImg.setAttribute("width", 157);
    newImg.setAttribute("height", 157);
    newHeading.setAttribute("class", "pokemon-card__heading");
    newParagraph.setAttribute("class", "pokemon-card__text");
    newSpanBox.setAttribute("class", "pokemon-inner");
    newSpanWeight.setAttribute("class", "pokemon-inner__weight");
    newSpanHeight.setAttribute("class", "pokemon-inner__height");

    // Assign values
    newHeading.textContent = _pokemons[i].name;
    newParagraph.textContent = _pokemons[i].type;
    newSpanWeight.textContent = _pokemons[i].weight;
    newSpanHeight.textContent = _pokemons[i].height;

    // Append childs
    newLi.appendChild(newImg);
    newLi.appendChild(newHeading);
    newLi.appendChild(newParagraph);
    newLi.appendChild(newSpanBox);
    newSpanBox.appendChild(newSpanWeight);
    newSpanBox.appendChild(newSpanHeight);
    element.appendChild(newLi);
  }
}

function addNewPokemon (image, _name, specialization, weight, height, pokemonArray) {

    elPokemonResult.innerHTML = null;

    var newImage = image.value.trim();
    var newName = _name.value.trim();
    var newSpecialization = specialization.value.trim();
    var newWeight = weight.value.trim();
    var newHeight = height.value.trim();

    var newPokemon = {
        img : newImage,
        name : newName,
        type : newSpecialization,
        weight : newWeight,
        height : newHeight,
    };

    pokemonArray.unshift(newPokemon)

};


var renderNewPokemon = function (evt) {
	evt.preventDefault();

	addNewPokemon(
		elPokemonImage,
		elPokemonName,
		elPokemonSpecialization,
		elPokemonWeight,
		elPokemonHeight,
		pokemons
	);

	renderPokemon(pokemons, elPokemonResult);

}

renderPokemon(pokemons, elPokemonResult);

elPokemonForm.addEventListener('submit', renderNewPokemon);{

}