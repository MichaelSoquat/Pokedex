// VARIABLE

let currentPokemon;

// LOAD POKEMON 

async function loadPokemon() { //asynchrone Funktion; lade Pokemon von API
    for (let i = 1; i < 100; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`; //lade von URL
        let response = await fetch(url); //beziehe Daten von URL
        currentPokemon = await response.json(); //wandle Text in Json um

        console.log('Loaded Pokemon', currentPokemon);
        renderPokemonInfo();
    }
}

// RENDER

function renderPokemonInfo() {
    let order = currentPokemon.order;
    let type2 = currentPokemon.types[1];

    if (type2) {
        type2 = currentPokemon.types[1].type.name[0].toUpperCase()+currentPokemon.types[1].type.name.substring(1);
        
    }
    else {
        type2 = ``;
    }

    if (currentPokemon.order > 9) {
        order = '0' + currentPokemon.order;
    }
    if (currentPokemon.order < 10) {
        order = '00' + currentPokemon.order;
    }
    if (currentPokemon.order > 99) {
        order = currentPokemon.order;
    }
    
    document.getElementById('pokedex').innerHTML += `<div id="card${currentPokemon.order}" class="pokemonContainer"><span class="styleOrder">${`#` + order}</span><span class="centerName">${currentPokemon['species']['name'][0].toUpperCase()+currentPokemon['species']['name'].substring(1)}</span>
    <img class="pics" src="${currentPokemon.sprites.front_shiny}"><div id="spaceBetweenType" class="typeSpaceBetween"><div class="styleType">${currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1)}</div><div id="${currentPokemon.order}" class="d-none styleType">${type2}</div></div></div>`;

    checkIfSecondType(type2);
    backgroundColor();
    
}

// CHECK SECOND TYPE

function checkIfSecondType(type2) {
    if (type2) {
        document.getElementById(`${currentPokemon.order}`).classList.remove(`d-none`);
    }
}
// GIVE EXACT BG COLOR

function backgroundColor() {
    if (currentPokemon.types[0].type.name === 'grass'||'bug'||'poison') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgGreen');
    }

    if (currentPokemon.types[0].type.name === 'fire') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgRed');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Water') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgBlue');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Electric') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgYellow');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Normal') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgGrey');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Fairy') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgGrey');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Ground') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgBrown');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Fighting') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgBrown');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Rock') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgBrown');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Psychic') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgPurple');
    }

    if (currentPokemon.types[0].type.name[0].toUpperCase()+currentPokemon.types[0].type.name.substring(1) === 'Ghost') {
        document.getElementById(`card${currentPokemon.order}`).classList.add('bgPurple');
    }
}

// SEARCH POKEMON

function searchForPokemon() {
    let searchPokemon = document.getElementById('searchPokemon');
}