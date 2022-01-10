let currentPokemon;

async function loadPokemon() { //asynchrone Funktion; lade Pokemon von API
    for (let i = 1; i < 104; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`; //lade von URL
        let response = await fetch(url); //beziehe Daten von URL
        currentPokemon = await response.json(); //wandle Text in Json um

        console.log('Loaded Pokemon', currentPokemon);
        renderPokemonInfo();
    }
}

function renderPokemonInfo() {
    let order = currentPokemon.order;
    if (currentPokemon.order > 9) {
        order= '0' +currentPokemon.order;
    }
    if (currentPokemon.order <10) {
        order= '00' +currentPokemon.order;
    }
    if (currentPokemon.order > 99) {
        order= currentPokemon.order;
    }
    document.getElementById('pokedex').innerHTML += `<div class="pokemonContainer"><span>${`#`+ order}</span><span class="centerName">${currentPokemon['species']['name']}</span>
    <img class="pics" src="${currentPokemon.sprites.front_shiny}"></div>`;
}