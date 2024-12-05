const pokemonImage = document.querySelector(".pokemon__image");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonName = document.querySelector(".pokemon__name");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");


let searchpokemon = 1;




const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200){

        const data = await APIResponse.json();

        return data; 
    }

   
};

const renderPokemon = async (pokemon) => {

    pokemonName.textContent ="login..."
    pokemonNumber.textContent = "⏱"
    pokemonImage
    
    const data = await fetchPokemon(pokemon);
    
    console.log(data)
    
    if (data) {

        //caso tudo de certo
        
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemonNumber.textContent = data.id;
        pokemonName.textContent = data.name;
        input.value = "";
        searchpokemon = data.id;

    } else {
        //caso de errado
        pokemonNumber.textContent = "";
        pokemonName.textContent = "not found :(";
        pokemonImage.src = "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img5ddd570f846a47.35892173.jpg?lastEdited=1574786833&w=600&h=600&f=webp";
    

    }


};

form.addEventListener('submit', (event) => {

    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {

    if (searchpokemon > 1) {
    
    
    }

    searchpokemon += -1;

    renderPokemon(searchpokemon)

});

buttonNext.addEventListener("click", () => {

    searchpokemon += 1;

    renderPokemon(searchpokemon)

});

renderPokemon(searchpokemon);
