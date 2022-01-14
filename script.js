// VARIABLE
let currentPokemon;
let allPokemons = [];
// LOAD POKEMON 

async function loadPokemon() { //asynchrone Funktion; lade Pokemon von API
    document.getElementById('pokedex').innerHTML = ``;
    for (let i = 0; i <= 150; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`; //lade von URL
        let response = await fetch(url); //beziehe Daten von URL
        currentPokemon = await response.json(); //wandle Text in Json um
        allPokemons.push(currentPokemon);
        console.log('Loaded Pokemon', currentPokemon);
        renderPokemonInfo(i);
    }
}

// RENDER

function renderPokemonInfo(i) {

    let type2 = allPokemons[i].types[1];
    let id;

    if (type2) {
        type2 = allPokemons[i].types[1].type.name[0].toUpperCase() + allPokemons[i].types[1].type.name.substring(1);

    }
    else {
        type2 = ``;
    }

    if (allPokemons[i].id > 9) {
        id = '0' + allPokemons[i].id;
    }
    if (allPokemons[i].id < 10) {
        id = '00' + allPokemons[i].id;
    }
    if (allPokemons[i].id > 99) {
        id = allPokemons[i].id;
    }

    document.getElementById('pokedex').innerHTML += `<div onclick="bigPokemonCard(${id},${i})" id="card${id}" class="pokemonContainer"><span class="styleid">${`#` + id}</span>
    <span class="centerName">${allPokemons[i]['species']['name'][0].toUpperCase() + allPokemons[i]['species']['name'].substring(1)}</span>
    <img  id="pic${id}"  class="pics" src="${allPokemons[i].sprites.front_shiny}"><div id="spaceBetweenType" class="typeSpaceBetween"><div class="styleType">${allPokemons[i].types[0].type.name[0].toUpperCase() + allPokemons[i].types[0].type.name.substring(1)}</div>
    <div id="${allPokemons[i].id}" class="d-none styleType">${type2}</div></div></div>`;
    checkIfSecondType(type2, i);

    checkBgColor(i, id);
}

// // CHECK SECOND TYPE

function checkIfSecondType(type2, i) {
    if (type2) {
        document.getElementById(`${allPokemons[i].id}`).classList.remove(`d-none`);
    }
}
// // GIVE EXACT BG COLOR
function checkBgColor(i, id) {
    if (allPokemons[i].types[0].type.name === 'grass' || 'bug' || 'poison') {
        document.getElementById(`card${id}`).classList.add('bgGreen');
    }

    if (allPokemons[i].types[0].type.name === 'fire') {
        document.getElementById(`card${id}`).classList.add('bgRed');
    }

    if (allPokemons[i].types[0].type.name === 'water') {
        document.getElementById(`card${id}`).classList.add('bgBlue');
    }

    if (allPokemons[i].types[0].type.name === 'electric') {
        document.getElementById(`card${id}`).classList.add('bgYellow');
    }

    if (allPokemons[i].types[0].type.name === 'normal') {
        document.getElementById(`card${id}`).classList.add('bgGrey');
    }

    if (allPokemons[i].types[0].type.name === 'fairy') {
        document.getElementById(`card${id}`).classList.add('bgGrey');
    }

    if (allPokemons[i].types[0].type.name === 'ground') {
        document.getElementById(`card${id}`).classList.add('bgBrown');
    }

    if (allPokemons[i].types[0].type.name === 'fighting') {
        document.getElementById(`card${id}`).classList.add('bgBrown');
    }

    if (allPokemons[i].types[0].type.name === 'rock') {
        document.getElementById(`card${id}`).classList.add('bgBrown');
    }

    if (allPokemons[i].types[0].type.name === 'psychic') {
        document.getElementById(`card${id}`).classList.add('bgPurple');
    }

    if (allPokemons[i].types[0].type.name === 'ghost') {
        document.getElementById(`card${id}`).classList.add('bgPurple');

    }
}


// SEARCH POKEMON

function searchForPokemon() {
    let searchPokemon = document.getElementById('searchPokemon').value;
    document.getElementById('pokedex').innerHTML = ``;
    for (let i = 0; i <= 150; i++) {

        if (allPokemons[i]['species']['name'].toLowerCase().startsWith(searchPokemon.toLowerCase())) {
            renderPokemonInfo(i)
        }
    }
    if (searchPokemon == ``) {
        renderPokemonInfo(i);
    }
}

function bigPokemonCard(id, i) {

    if (allPokemons[i].id > 9) {
        id = '0' + allPokemons[i].id;
    }
    if (allPokemons[i].id < 10) {
        id = '00' + allPokemons[i].id;
    }
    if (allPokemons[i].id > 99) {
        id = allPokemons[i].id;
    }


    if (!document.getElementById(`card${id}`).classList.contains('bigPokemonCenter')) {
        document.getElementById(`card${id}`).classList.add('bigPokemonCenter');
    }
    else { document.getElementById(`card${id}`).classList.remove('bigPokemonCenter'); }
}




